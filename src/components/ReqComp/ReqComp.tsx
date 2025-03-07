import { useEffect, useRef, useState } from "react";
import { getAuthor, getQuote } from "../../lib/apiCalls";
import { ReqInfo } from "./ReqInfo";

type ReqCompProps = {
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setOpenReq: React.Dispatch<React.SetStateAction<boolean>>;
  setQuotData: React.Dispatch<React.SetStateAction<string>>;
  token: string;
};

export function ReqComp({
  setError,
  setOpenReq,
  setQuotData,
  token,
}: ReqCompProps) {
  const [loadStat, setLoadStat] = useState({
    auth: false,
    quot: false,
  });

  const abortCtrlAuthorRef = useRef<AbortController | null>(null);
  const abortCtrlQuoteRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const abortCtrlAuthor = new AbortController();
    const abortCtrlQuote = new AbortController();

    abortCtrlAuthorRef.current = abortCtrlAuthor;
    abortCtrlQuoteRef.current = abortCtrlQuote;

    async function fetchData() {
      setError(null);
      try {
        setLoadStat({ ...loadStat, auth: true });
        const author = await getAuthor(token, abortCtrlAuthor.signal);
        setLoadStat({ quot: true, auth: false });

        const quote = await getQuote(
          token,
          author.authorId,
          abortCtrlQuote.signal
        );
        setLoadStat({ ...loadStat, quot: false });
        setQuotData(`${author.name}: ${quote.quote}`);
      } catch (error: any) {
        if (error.message !== "Aborted")
          setError(error?.message || "Some Error happend, try again!");
      }
      setOpenReq(false);
    }
    fetchData();

    return () => {
      abortReq(abortCtrlAuthorRef.current, abortCtrlQuoteRef.current);
    };
  }, []);

  function abortReq(
    ctrlAuth: AbortController | null,
    ctrlQuot: AbortController | null
  ) {
    if (ctrlAuth) {
      ctrlAuth.abort();
    }
    if (ctrlQuot) {
      ctrlQuot.abort();
    }
  }

  function handleCancel() {
    abortReq(abortCtrlAuthorRef.current, abortCtrlQuoteRef.current);
    setOpenReq(false);
  }

  return <ReqInfo loadStat={loadStat} handleCancel={handleCancel} />;
}
