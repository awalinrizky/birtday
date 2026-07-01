import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import NotFound from "../pages/NotFound";

export default function Router({ audioRef }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home audioRef={audioRef} />} />

        <Route
          path="/birthday"
          element={<Home audioRef={audioRef} />}
        />

        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}