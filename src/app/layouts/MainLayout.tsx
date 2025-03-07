import Box from "@mui/joy/Box";
import { NavBar } from "../../components/NavBar/NavBar";
import { Outlet } from "react-router";

export function MainLayout() {
  return (
    <Box sx={{ height: "100dvh", display: "flex", flexDirection: "column" }}>
      <NavBar />
      <Box
        component={"main"}
        sx={{
          height: "100%",
          p: { xs: 2, md: 4, lg: 6 },
          display: "grid",
          justifyItems: "center",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
