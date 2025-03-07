import Box from "@mui/joy/Box";
import { useAppSelector, useAuth } from "../../lib/hooks";
import { ProfileInfo } from "./ProfileInfo";
import { useState } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import { UpdateBtn } from "./UpdateBtn";
import { ReqComp } from "./ReqComp";

export function ProfileComp() {
  const { token } = useAppSelector((st) => st.auth);
  useAuth(true, token);

  const [loadInfo, setLoadInfo] = useState(false);
  const [openReq, setOpenReq] = useState(false);

  const [data, setData] = useState<ProileData>(null);
  const [errorMsg, setError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const resData = await getProfile(token!);
        setData(resData);
      } catch (error: any) {
        setError(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        justifyItems: "center",
        width: "100%",
      }}
    >
      {loadInfo ? (
        <CircularProgress />
      ) : (
        <>
          <ProfileInfo token={token!} setLoading={setLoadInfo} />
          <UpdateBtn setOpenReq={setOpenReq} />
          <ReqComp />
        </>
      )}
    </Box>
  );
}
