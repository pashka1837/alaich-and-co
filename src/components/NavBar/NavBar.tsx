import { Button, Sheet } from "@mui/joy";
import { useAppSelector } from "../../lib/hooks";
import { MyNavLink } from "./MyNavLink";
import { links } from "../../constants/links";

export function NavBar() {
  const { token } = useAppSelector((st) => st.auth);
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
          <Button color="danger">Sign out</Button>
        </>
      ) : (
        <MyNavLink {...links["signin"]} />
      )}
    </Sheet>
  );
}
