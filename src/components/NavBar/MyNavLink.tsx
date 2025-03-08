import Button from "@mui/joy/Button";
import { NavLink } from "react-router";

type MyNavLinkProps = {} & LinkType;

export function MyNavLink({ href, name }: MyNavLinkProps) {
  return (
    <NavLink to={href}>
      {({ isActive }) => (
        <Button component={"span"} color={isActive ? "primary" : "neutral"}>
          {name}
        </Button>
      )}
    </NavLink>
  );
}
