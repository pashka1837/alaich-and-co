import { useNavigate } from "react-router";
import { useAppSelector } from "../../lib/hooks";
import { links } from "../../constants/links";
import { useEffect } from "react";
import Box from "@mui/joy/Box";
import { SignForm } from "../../components/SignForm/SignForm";

export function Signin() {
  const { token } = useAppSelector((st) => st.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate(links["about"].href);
  }, [token]);

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
