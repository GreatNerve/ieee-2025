import { PublicLayout } from "@/Layout/Public.layout.jsx";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("../Pages/Home.page.jsx"));

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
