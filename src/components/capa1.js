import React from "react";
import nube1 from "../assets/nube1.svg";
import nube2 from "../assets/nube2.svg";
import nube4 from "../assets/nube4.svg";
import sol from "../assets/sol.svg";
import planta1 from "../assets/GIF-FLOR.gif";
import bird from "../assets/GIF-BIRD.gif";
import arbusto from "../assets/GIF-ARBUSTO-B.gif";
import { Tooltip } from "react-tippy";
import logoyms from "../assets/logoyms.png";

export default function Capa1() {
  return (
    <div className="container-fluid fondo1">
      <div className="row">
        <div className="col-9">
          <img src={nube1} id="nube1" alt="..." />
          <img src={nube2} id="nube2" alt="..." />
        </div>
        <div className="col-3">
          <img src={sol} className="sol" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <Tooltip
            title="Informacion"
            position="top"
            trigger="click"
            theme="light"
          >
            <img src={nube4} className="nube4" alt="..." />
          </Tooltip>
        </div>
        <div className="col-4">
          <Tooltip
            title="Es un proyecto de carácter social destinado
            a fomentar un impacto social sostenible."
            position="top"
            trigger="click"
            theme="light"
          >
            <img src={logoyms} className="nube4" alt="..." />
          </Tooltip>
        </div>
        <div className="col-4">
          <Tooltip
            title="Informacion"
            position="top"
            trigger="click"
            theme="light"
          >
            <img src={nube4} className="nube4" alt="..." />
          </Tooltip>
        </div>
      </div>

      <div className="row">
        <div className="col-4 jardin">
          <img src={arbusto} id="arbusto" alt="..." />
        </div>
        <div className="col-4 fondoplanta">
          <Tooltip
            html={
              <div style={{ left: 20 }}>
                <h1>Hola!</h1>
                <h2>YO SOY MINA</h2>
                <p>
                  Quiero ser adoptada para que ayudemos a fomentar empleo,
                  fomentemos proyectos sociales de impacto y arbolicemos
                  nuestros parques y jardines puedo ser un arbol de frutas, un
                  cactus, una bella flor tu me podráss escoger recuerda que
                  tienes que llevarme a vivir con mis hermanas mi objetvo es que
                  seamos hermanos y juntos seamos solidarios hagamos que nuestro
                  apoyo se refleje en obras de caridad de impacto, empleo y
                  arborización.
                </p>
              </div>
            }
            position="right"
            trigger="click"
            theme="light"
          >
            <img src={planta1} id="planta1" alt="..." />
          </Tooltip>
        </div>
        <div className="col-4 jaula">
          <img src={bird} id="bird" alt="..." />
        </div>
      </div>
    </div>
  );
}
