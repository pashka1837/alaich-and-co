import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./routes/Home";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {/* 
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
