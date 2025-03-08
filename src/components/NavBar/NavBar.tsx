import { Button, Sheet } from "@mui/joy";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { MyNavLink } from "./MyNavLink";
import { links } from "../../constants/links";
import { useNavigate } from "react-router";
import { deleteToken } from "../../feature/authSlice";
import { deleteLogout } from "../../lib/apiCalls";
import { useState } from "react";

export function NavBar() {
  const { token } = useAppSelector((st) => st.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  async function handleSignOut() {
    setLoading(true);
    try {
      await deleteLogout(token!);
      setLoading(false);
      dispatch(deleteToken());
      navigate(links["signin"].href);
    } catch (error: any) {
      alert(error?.message);
    }
    setLoading(false);
  }
  return (
    <Sheet
      component={"nav"}
      variant="soft"
      color="primary"
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        gap: "20px",
        p: { xs: 2, md: 4, lg: 6 },
      }}
    >
      <MyNavLink {...links["about"]} />
      {token ? (
        <>
          <MyNavLink {...links["profile"]} />
          <Button loading={loading} onClick={handleSignOut} color="danger">
            Sign out
          </Button>
        </>
      ) : (
        <MyNavLink {...links["signin"]} />
      )}
    </Sheet>
  );
}
