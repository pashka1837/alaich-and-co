import { useEffect, useState } from "react";
import { getInfo } from "../../lib/apiCalls";
import { Box, CircularProgress, Typography } from "@mui/joy";

export function About() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const { info } = await getInfo();
        setData(info);
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
        <Typography level="title-lg">{data}</Typography>
      ) : (
        <Typography color="danger" level="title-lg">
          {errorMsg}
        </Typography>
      )}
    </Box>
  );
}
