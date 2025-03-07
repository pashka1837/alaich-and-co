import { Button, Typography } from "@mui/joy";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import { useEffect, useRef, useState } from "react";
import { getAuthor, getQuote } from "../../lib/apiCalls";
import { useAppSelector } from "../../lib/hooks";

type ReqCompProps = {
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setOpenReq: React.Dispatch<React.SetStateAction<boolean>>;
  setQuotData: React.Dispatch<React.SetStateAction<string>>;
};

export function ReqComp({ setError, setOpenReq, setQuotData }: ReqCompProps) {
  const { token } = useAppSelector((st) => st.auth);
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
        const author = await getAuthor(token!, abortCtrlAuthor.signal);
        setLoadStat({ quot: true, auth: false });

        const quote = await getQuote(
          token!,
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

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        overflow: "hidden",
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "grid",
        justifyItems: "center",
        p: { xs: 2, md: 4, lg: 6 },
      }}
    >
      <Sheet
        sx={{
          display: "flex",
          gap: "15px",
          flexDirection: "column",
          alignItems: "flex-start",
          p: 4,
          width: "80%",
          borderRadius: "sm",
          maxHeight: "50%",
        }}
      >
        <Typography level="h2">
          Requesing the
          {(loadStat.auth && " author") || (loadStat.quot && " quote")}
        </Typography>
        <Typography level="title-lg">
          Step 1: Requesting author.. {loadStat.auth ? "Loading" : "Completed"}
        </Typography>
        <Typography level="title-lg">
          Step 1: Requesting quote.. {loadStat.quot ? "Loading" : "Completed"}
        </Typography>
        <Button onClick={handleCancel}>Cancel</Button>
      </Sheet>
    </Box>
  );
}
