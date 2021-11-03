import React from "react";
import Capa1 from "./components/capa1";
import Menu from "./components/menu";
import Capa2 from "./components/capa2";
import Footpaage from "./components/footpaage";
import Flores from "./components/flores";


function App() {
  return (
    <div className="cabecera">
      <Menu/>
      <Capa1/>
      <Capa2/>
      <Flores/>
      <Footpaage/>
    </div>
  );
}

export default App;
