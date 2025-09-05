import React from "react";
import { Route, Routes } from "react-router-dom";
import Aside from "../Pages/Aside";
import DashBoard from "../Pages/DashBoard";
import NotFound from "../Pages/NotFound";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route element={<Aside />}>
          <Route index path="dashboard" element={<DashBoard />} />
          <Route path="*" element={<NotFound path="/app/dashboard" />} />
          {/* <Route path="youtube" />
          <Route path="tiktok" />
          <Route path="instagram" /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
