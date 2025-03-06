import { BrowserRouter, Route, Routes } from "react-router";
import { About } from "./routes/About";
import { MainLayout } from "./layouts/MainLayout";
import { Signin } from "./routes/Signin";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
