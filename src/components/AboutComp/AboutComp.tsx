import { useEffect, useState } from "react";
import { getInfo } from "../../lib/apiCalls";
import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";
import Typography from "@mui/joy/Typography";
import { ErrorComp } from "../ErrorComp/ErrorComp";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {loading && <CircularProgress data-testid="loaderEl" />}
      <ErrorComp errorMsg={errorMsg} />
      {data && (
        <Typography data-testid="data" level="title-lg">
          {data}
        </Typography>
      )}
    </Box>
  );
}
