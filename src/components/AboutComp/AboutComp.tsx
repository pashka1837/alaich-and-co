import { useEffect, useState } from "react";
import { getInfo } from "../../lib/apiCalls";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { ErrorComp } from "../ErrorComp/ErrorComp";
import { Loader } from "../Loader";

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
      {loading && <Loader />}
      <ErrorComp errorMsg={errorMsg} />
      {data && (
        <Typography data-testid="dataAbout" level="title-lg">
          {data}
        </Typography>
      )}
    </Box>
  );
}
