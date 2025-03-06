import { BrowserRouter, Route, Routes } from "react-router";
import { About } from "./routes/About";
import { MainLayout } from "./layouts/MainLayout";
import { Signin } from "./routes/Signin";
import { Profile } from "./routes/Profile";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
