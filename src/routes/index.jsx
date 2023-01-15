import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notfound";
import Service from "../pages/service";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
