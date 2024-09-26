import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import FormAbout from "../components/FormAbout";
import FormRegistr from "../components/FormRegistr";
import Details from "../pages/Details";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<FormRegistr />} />
        <Route path="/card/:id" element={<Details />} />
        <Route path="/about-us" element={<FormAbout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Router;
