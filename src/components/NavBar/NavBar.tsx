import { Button, Sheet } from "@mui/joy";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { MyNavLink } from "./MyNavLink";
import { links } from "../../constants/links";
import { useNavigate } from "react-router";
import { deleteToken } from "../../feature/authSlice";

export function NavBar() {
  const { token } = useAppSelector((st) => st.auth);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  function handleSignOut() {
    dispatch(deleteToken());
    navigate(links["about"].href);
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
          <Button onClick={handleSignOut} color="danger">
            Sign out
          </Button>
        </>
      ) : (
        <MyNavLink {...links["signin"]} />
      )}
    </Sheet>
  );
}
