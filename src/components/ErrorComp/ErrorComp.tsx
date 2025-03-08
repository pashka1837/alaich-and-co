import Typography from "@mui/joy/Typography";

type ErrorCompProps = {
  errorMsg: string | null;
};

export function ErrorComp({ errorMsg }: ErrorCompProps) {
  if (!errorMsg) return <span style={{ height: "21px" }}></span>;
  return (
    <Typography color="danger" level="title-lg">
      {errorMsg}
    </Typography>
  );
}
