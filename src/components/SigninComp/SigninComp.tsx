import Box from "@mui/joy/Box";
import { useAppSelector, useAuth } from "../../lib/hooks";
import { SignForm } from "./SignForm";

export function SigninComp() {
  const { token } = useAppSelector((st) => st.auth);
  useAuth(false, token);

  return (
    <Box
      sx={{
        display: "flex",
        justifyItems: "center",
        alignItems: "baseline",
      }}
    >
      <SignForm />
    </Box>
  );
}
