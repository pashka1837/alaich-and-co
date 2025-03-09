import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { LoadStatType } from "./ReqComp";

type ReqInfoProps = {
  loadStat: LoadStatType;
  handleCancel(): void;
};

export function ReqInfo({ loadStat, handleCancel }: ReqInfoProps) {
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
        <Button data-testid="cancelBtn" onClick={handleCancel}>
          Cancel
        </Button>
      </Sheet>
    </Box>
  );
}
