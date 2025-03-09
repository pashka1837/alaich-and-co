import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { ProileData } from "./ProfileComp";

type ProfileInfoProps = {
  data: ProileData;
};

export function ProfileInfo({ data }: ProfileInfoProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      data-testid="profileInfo"
    >
      {data && (
        <>
          <Typography level="h2">Welcome, {data.fullname}!</Typography>
          <Typography level="title-lg">{data.email}</Typography>
        </>
      )}
    </Box>
  );
}
