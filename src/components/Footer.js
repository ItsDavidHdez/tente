import React from "react";
import etica from "../assets/docs/etica.pdf";
import politicas from "../assets/docs/politicas.pdf";
import beneficiosDoc from "../assets/docs/beneficios.pdf";
import valores from "../assets/docs/valores.pdf";

export default function Footer() {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
              ¡Mantengámonos en contacto!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Encuéntrenos en cualquiera de estas plataformas, respondemos de 1
              a 2 días hábiles.
            </h5>
            <span>
              Ubicanos <a href="https://goo.gl/maps/TA2zFg3o81GqkwZx5">Aqui</a>
            </span>
            <div className="mt-6 flex">
              <div
                className="flex bg-white text-blue-600 shadow-lg font-normal h-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                style={{ width: "40px" }}
              >
                <a
                  className=""
                  href="https://www.facebook.com/Tent%C3%A9-104557801617693"
                >
                  <i className="flex fab fa-facebook-square"></i>
                </a>
              </div>
              <div className="flex bg-white text-blue-600 shadow-lg font-normal h-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3">
                <a href="https://www.instagram.com/tente85/?hl=es-la">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div
              className="flex flex-wrap items-top mb-6"
              style={{ display: "flex", width: "100%" }}
            >
              <div
                className="w-full lg:w-4/12 px-4"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <div>
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Otros recursos
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href={etica}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Código de ética
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href={politicas}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Políticas de la Empresa
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href={beneficiosDoc}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Beneficios
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href={valores}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Valores
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()} . Todos los izquierdos
              reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
