import React from "react";
import Maderomenu from "./svg/maderomenu";
import Maderomenu10 from "./svg/maderomenu10";
import Maderomenu2 from "./svg/maderomenu2";
import Maderomenu3 from "./svg/maderomenu3";
import Maderomenu4 from "./svg/maderomenu4";
import Maderomenu5 from "./svg/maderomenu5";
import Maderomenu6 from "./svg/maderomenu6";
import Maderomenu7 from "./svg/maderomenu7";
import Maderomenu8 from "./svg/maderomenu8";
import Maderomenu9 from "./svg/maderomenu9";

export default function Menu() {
  return (
    <div className="d-md-flex justify-content-md-end menu">
      <button
        className="btn shadow-none flotante"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-white text-center" id="offcanvasScrollingLabel">
            <strong>LUGARES QUE APOYAREMOS</strong>
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <button
            type="button"
            className="btn shadow-none boton1m text-white p-2"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop1"
          >
            Asilos
          </button>
          <Maderomenu />

          <button
            type="button"
            className="btn shadow-none boton1m text-white p-2"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop2"
          >
            Albergues
          </button>
          <Maderomenu2 />
          <button
            type="button"
            className="btn shadow-none boton1m text-white p-2"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop3"
          >
            Comedores Populares
          </button>
          <Maderomenu3 />
          <button
            type="button"
            className="btn shadow-none boton1m text-white p-2"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop4"
          >
            Ollas Comunes
          </button>
          <Maderomenu4 />

          <button
            type="button"
            className="btn shadow-none boton1m text-white p-2"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop5"
          >
            Centros de Educacion Basica Especial
          </button>
          <Maderomenu5 />

          <button
            type="button"
            className="btn shadow-none boton1m text-white p-2"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop6"
          >
            Apoyo y Talento
          </button>
          <Maderomenu6 />

          <button
            type="button"
            className="btn shadow-none boton1m text-white p-2"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop7"
          >
            Proteccion Animal
          </button>
          <Maderomenu7 />

          <button
            type="button"
            className="btn shadow-none boton1m text-white p-2"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop8"
          >
            Instituciones Educativas
          </button>
          <Maderomenu8 />

          <button
            type="button"
            className="btn shadow-none boton1m text-white p-2"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop9"
          >
            Refugios Temporales
          </button>
          <Maderomenu9 />

          <button
            type="button"
            className="btn shadow-none boton1m text-white p-2"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop10"
          >
            Asociaciones
          </button>
          <Maderomenu10 />
        </div>
      </div>
    </div>
  );
}
