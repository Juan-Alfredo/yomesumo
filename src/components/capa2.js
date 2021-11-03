import React, { useState } from "react";

var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Dicimebre",
];

var videos = [
  "https://www.youtube.com/embed/6VoiV_oAiHI",
  "https://www.youtube.com/embed/ZxprQ48iSU4",
  "https://www.youtube.com/embed/E-l_eoxpVXk",
  "https://www.youtube.com/embed/61JgAjHJyUo",
  "https://www.youtube.com/embed/zoiR2ee4Iq4",
  "https://www.youtube.com/embed/u81S75r4aUY",
  "https://www.youtube.com/embed/5TAQ2vaWqrI",
  "https://www.youtube.com/embed/xlbBX2eC3_U",
  "https://www.youtube.com/embed/_FyKOpdpiFM",
  "https://www.youtube.com/embed/EVsQXvoZGr8",
  "https://www.youtube.com/embed/cnFJEoaCeUk",
  "https://www.youtube.com/embed/F8h6e5n24wM",
]

export default function Capa2() {
  var mesactual = new Date();
  const [counter, setcounter] = useState(mesactual.getMonth());
  function increase() {
    counter===11? setcounter(0):setcounter(counter + 1);
  }
  function decrease() {
    counter===0? setcounter(11):setcounter(counter - 1);
  }

  return (
    <div >
      <h3 className="text-center titulocap2" > <strong>Eventos del Año</strong></h3>
      <div className="contend2">
      <div className="tvbox">
        <iframe
          className="youtube"
          src={videos[counter]}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
          allowfullscreen
        ></iframe>
        <div className="btn-group btntv" role="group" aria-label="Basic example">
          <button
            type="button"
            onClick={decrease}
            class="btn btn-primary shadow-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-left-fill"
              viewBox="0 0 16 16"
            >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
          </button>
          <button type="button" class="btn btn-primary">
            {meses[counter]}
          </button>
          <button
            type="button"
            onClick={increase}
            class="btn btn-primary shadow-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="caja">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="true"
                aria-controls="flush-collapseOne"
              >
                <strong>EVENTOS MENSUALES</strong>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Brindaremos apoyo social de impacto y podras visualizar la
                presentacion de cada entidad en nuestra pagina web, ademas,
                podras generar tu donacion donde tu mejor lo consideres Tambien
                podras visualizar en el evento de caridad del mes y el objetivo
                logrado. Asi como los nuevos cuidadores y personal que se suma a
                CUENTA CONMIGO. Todos los meses llegara a tu correo una postal
                de agradecimiento de cada persona que apoyaste, asi mismo las
                nuevas fuentes de empleo que lograste y tambien los nuevos
                puntos de siembra.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <strong>PROYECTOS SOCIALES DE IMPACTO</strong>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Estan enfocados a mejorar las condiciones ambientales y físicas
                de las entidades de caridad elegidas, tu podrás sugerir nuevos
                centros de impacto. Nuestros colaboradores podrán evaluar y
                gestionar un proyecto para ti
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <strong>SOY UNA EMPRESA</strong>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Las empresas que trabajen con CUENTA CONMIGO podran gestionar
                con nosotros la formulacion de su proyecto para obtener el
                CERTIFIFCADO DE EMPRESA RESPONSABLE (certificado que ayuda a
                gestionar nuevas oportunidades de licitacion con el estado)
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                <strong>CUANTO TIEMPO PÚEDO APOYAR</strong>
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                CUENTA CONMIGO tiene un calendario de actividades de manera
                mensual las cuales se te podra informar por nuestra web y redes
                sociales, si tu interes es participar directamente con nosotros
                puedes comunicarte con nosotros <a href="#masinfo">Aqui.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
