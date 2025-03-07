import Box from "@mui/joy/Box";
import { useAppSelector, useAuth } from "../../lib/hooks";
import { ProfileInfo } from "./ProfileInfo";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import { UpdateBtn } from "./UpdateBtn";
import { ReqComp } from "./ReqComp";
import { getProfile } from "../../lib/apiCalls";
import Typography from "@mui/joy/Typography";

export type ProileData = {
  fullname: string;
  email: string;
} | null;

export function ProfileComp() {
  const { token } = useAppSelector((st) => st.auth);
  useAuth(true, token);

  const [loadInfo, setLoadInfo] = useState(false);
  const [openReq, setOpenReq] = useState(false);

  const [profData, setProfData] = useState<ProileData>(null);
  const [errorMsg, setError] = useState<string | null>(null);

  const [quoteData, setQuotData] = useState("");
  useEffect(() => {
    async function fetchData() {
      setLoadInfo(true);
      try {
        const resData = await getProfile(token!);
        setProfData(resData);
      } catch (error: any) {
        setError(error.message);
      }
      setLoadInfo(false);
    }
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {errorMsg && (
        <Typography color="danger" level="title-lg">
          {errorMsg}
        </Typography>
      )}
      {loadInfo ? (
        <CircularProgress />
      ) : (
        <>
          <ProfileInfo data={profData} />
          <UpdateBtn setOpenReq={setOpenReq} />
          {openReq && (
            <ReqComp
              setError={setError}
              setOpenReq={setOpenReq}
              setQuotData={setQuotData}
            />
          )}
          {quoteData && (
            <Typography color="success" level="title-lg">
              {quoteData}
            </Typography>
          )}
        </>
      )}
    </Box>
  );
}
