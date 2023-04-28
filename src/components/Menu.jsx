    import LoginButton from "./LoginButton";
import React, { useEffect } from "react";

const Menu = () => {
  useEffect(() => {
    return () => {
      console.log("Limpiando componente1");
    };
  }, []);

 return (
    <div>
      <h1 className="bienvenida">Mendoza's Acaddemy</h1>
      <LoginButton/>

    </div>
  );
};

export default Menu;
