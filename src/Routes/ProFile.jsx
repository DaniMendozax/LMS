import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import Home from "../components/Home";
import SeccionVideo from "../components/SeccionVideo";
import Galeria from "../components/Galeria";
import Layout from "../Templates/Layout";

const ProFile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cursos" element={<SeccionVideo />} />
              <Route path="/Images" element={<Galeria/>} />
            </Routes>
          </Layout>
        </BrowserRouter>
  );
};

export default ProFile;
