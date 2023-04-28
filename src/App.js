import ProFile from "./Routes/ProFile";
import Menu from "./components/Menu";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import "./css/stilosEtiquetas.css";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";



import { useState, useEffect } from "react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      setShowLogin(false);
    }
  }, [isAuthenticated]);

  if (isLoading){
    return <h1>Loading...</h1>;
  }

  return(
    <div>
      {showLogin ? (<Menu/>) : (<ProFile/>)}
    </div>  
  )
}

export default App;
