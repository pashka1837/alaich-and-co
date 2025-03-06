import { BrowserRouter, Route, Routes } from "react-router";
import { About } from "./routes/About";
import { MainLayout } from "./layouts/MainLayout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<About />} />
          {/* 
        <Route path="/login" element={<Login />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
