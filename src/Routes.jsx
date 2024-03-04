import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Userpage from "../src/pages/Userpage";

const Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Userpage />} />
    </Routes>
  );
};

export default Routes;
