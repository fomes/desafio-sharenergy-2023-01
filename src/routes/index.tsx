import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="*" element={<Signin />} />
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}
