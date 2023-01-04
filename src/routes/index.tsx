import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CatsPage from "../pages/CatsPage";
import ClientsPage from "../pages/ClientsPage";
import DogsPage from "../pages/DogsPage";
import ErrorPage from "../pages/ErrorPage";
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
          <Route path="/cats" element={<CatsPage />} />
          <Route path="/dogs" element={<DogsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}
