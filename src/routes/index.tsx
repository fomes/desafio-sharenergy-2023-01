import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import CatsPage from "../pages/CatsPage";
import ClientsPage from "../pages/ClientsPage";
import DogsPage from "../pages/DogsPage";
import Home from "../pages/Home";
import Signin from "../pages/Signin";

const Private = ({ Item }: any) => {
  const { auth } = useAuth();

  return auth ? <Item /> : <Signin />;
};

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="*" element={<Signin />} />
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Private Item={Home} />} />
          <Route path="/cats" element={<Private Item={CatsPage} />} />
          <Route path="/dogs" element={<Private Item={DogsPage} />} />
          <Route path="/clients" element={<Private Item={ClientsPage} />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}
