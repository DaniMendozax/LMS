import { useAuth0 } from "@auth0/auth0-react";
import "../css/login.css";
import React from "react";




const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="login" onClick={() => loginWithRedirect()}>Login</button>;
};

export default LoginButton;
