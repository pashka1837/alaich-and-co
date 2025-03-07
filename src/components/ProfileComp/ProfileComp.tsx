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

  const [data, setData] = useState<ProileData>(null);
  const [errorMsg, setError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchData() {
      setLoadInfo(true);
      try {
        const resData = await getProfile(token!);
        setData(resData);
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
          <ProfileInfo data={data} />
          <UpdateBtn setOpenReq={setOpenReq} />
          {openReq && <ReqComp setError={setError} setOpenReq={setOpenReq} />}
        </>
      )}
    </Box>
  );
}
