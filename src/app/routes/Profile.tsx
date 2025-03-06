import { useEffect, useState } from "react";
import { useAppSelector, useAuth } from "../../lib/hooks";
import { getProfile } from "../../lib/apiCalls";
import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";
import Typography from "@mui/joy/Typography";

type ProileData = {
  fullname: string;
  email: string;
} | null;

export function Profile() {
  const { token } = useAppSelector((st) => st.auth);
  const [data, setData] = useState<ProileData>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setError] = useState<string | null>(null);

  useAuth(true, token);

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
      }}
    >
      {loading && !data && <CircularProgress />}
      {!errorMsg && data ? (
        <>
          <Typography level="h2">Welcome, {data.fullname}!</Typography>
          <Typography level="title-lg">{data.email}</Typography>
        </>
      ) : (
        <Typography color="danger" level="title-lg">
          {errorMsg}
        </Typography>
      )}
    </Box>
  );
}
