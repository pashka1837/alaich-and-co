import Box from "@mui/joy/Box";
import { NavBar } from "../../components/NavBar/NavBar";
import { Outlet } from "react-router";

export function MainLayout() {
  return (
    <Box sx={{ height: "100%" }}>
      <NavBar />
      <Outlet />
    </Box>
  );
}
