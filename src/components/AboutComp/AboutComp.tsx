import { useEffect, useState } from "react";
import { getInfo } from "../../lib/apiCalls";
import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";
import Typography from "@mui/joy/Typography";

export function AboutComp() {
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
    <Box>
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
