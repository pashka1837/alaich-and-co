import { useAppSelector, useAuth } from "../../lib/hooks";
import Box from "@mui/joy/Box";
import { SignForm } from "../../components/SignForm/SignForm";

export function Signin() {
  const { token } = useAppSelector((st) => st.auth);
  useAuth(false, token);

  return (
    <Box
      sx={{
        display: "grid",
        justifyItems: "center",
      }}
    >
      <SignForm />
    </Box>
  );
}
