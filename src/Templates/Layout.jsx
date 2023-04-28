import React from "react";
import NavBar from "../container/Navbar";


const Layout = ({ children }) => {
  return (
    <div className="">
      <NavBar/>
      {children}
    </div>
  );
};
export default Layout;
