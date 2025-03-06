import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./routes/Home";
import { MainLayout } from "./layouts/MainLayout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* 
        <Route path="/login" element={<Login />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
