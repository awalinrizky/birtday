import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/admin/Dashboard";
import Timeline from "../pages/admin/Timeline";
import Birthday from "../pages/Birthday";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<Dashboard />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/admin/timeline" element={<Timeline />} />
        <Route path="/birthday" element={<Birthday />} />
      </Routes>
    </BrowserRouter>
  );
}
