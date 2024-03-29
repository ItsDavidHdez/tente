import React from "react";
import team1 from "../assets/img/team1.jpg";
import team2 from "../assets/img/team2.jpg";
import team3 from "../assets/img/team3.jpg";
import team4 from "../assets/img/team4.jpg";
import team5 from "../assets/img/team5.jpg";
import team6 from "../assets/img/team6.jpg";

const Team = () => {
  return (
    <>
      <section id="team" className="pt-20" style={{ marginBottom: "300px" }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">Sobre nosotros</h2>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 w-4/12 lg:mb-4 mb-12 mx-24">
              <div className="px-6">
                <div className="flex justify-center">
                  <div
                    className="inline-block relative overflow-hidden"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      alt="..."
                      src={team1}
                      className="shadow-lg rounded-full max-w-full mx-auto"
                      style={{
                        width: "auto",
                        marginTop: "-10px",
                        marginLeft: "0px",
                      }}
                    />
                  </div>
                </div>
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Fernanda Ortega</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Director General de la Empresa
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="flex justify-center items-center bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1">
                      <a href="https://www.facebook.com/profile.php?id=100004572640078">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </div>
                    <div className="flex justify-center items-center bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1">
                      <a href="https://www.instagram.com/maffortega17/?hl=es-la">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 w-4/12 lg:mb-4 mb-12">
              <div className="px-6">
                <div className="flex justify-center">
                  <div
                    className="inline-block relative overflow-hidden"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      alt="..."
                      src={team2}
                      className="shadow-lg rounded-full max-w-full mx-auto"
                      style={{
                        width: "auto",
                      }}
                    />
                  </div>
                </div>
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Rosy García</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Director de Operaciones
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="flex justify-center items-center bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1">
                      <a href="https://www.facebook.com/rosy.garcia.904108">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </div>
                    <div className="flex justify-center items-center bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1">
                      <a href="https://www.instagram.com/rosygargon/?hl=es-la">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 w-4/12 lg:mb-4 mb-12">
              <div className="px-6">
                <div className="flex justify-center">
                  <div
                    className="inline-block relative overflow-hidden"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      alt="..."
                      src={team3}
                      className="shadow-lg rounded-full max-w-full mx-auto"
                      style={{
                        width: "auto",
                        marginTop: "0px",
                        marginLeft: "0px",
                      }}
                    />
                  </div>
                </div>
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Axel Rodríguez</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Director de Marketing
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="flex justify-center items-center bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1">
                      <a href="https://www.facebook.com/profile.php?id=100010265146633">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </div>
                    <div className="flex justify-center items-center bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1">
                      <a href="https://www.instagram.com/axelrods19/?hl=es-la">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 w-4/12 lg:mb-0 mb-12">
              <div className="px-6">
                <div className="flex justify-center">
                  <div
                    className="inline-block relative overflow-hidden"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      alt="..."
                      src={team4}
                      className="shadow-lg rounded-full max-w-full mx-auto"
                      style={{
                        width: "auto",
                        marginTop: "0px",
                        marginLeft: "0px",
                      }}
                    />
                  </div>
                </div>
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Brenda Jaramillo</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Director de Producciones y Ventas
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="flex justify-center items-center bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1">
                      <a href="https://www.facebook.com/brenda.jaramillo.94">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </div>
                    <div className="flex justify-center items-center bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1">
                      <a href="https://www.instagram.com/brenda_jaramillo26/?hl=es-la">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 w-4/12 lg:mb-0 mb-12">
              <div className="px-6">
                <div className="flex justify-center">
                  <div
                    className="inline-block relative overflow-hidden"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      alt="..."
                      src={team5}
                      className="shadow-lg rounded-full max-w-full mx-auto"
                      style={{
                        width: "auto",
                        marginTop: "-18px",
                        marginLeft: "0px",
                      }}
                    />
                  </div>
                </div>
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Miguel Cerón</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Director Financiero
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="flex justify-center items-center bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1">
                      <a href="https://www.facebook.com/profile.php?id=100007736435924">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 w-4/12 lg:mb-0 mb-12">
              <div className="px-6">
                <div className="flex justify-center">
                  <div
                    className="inline-block relative overflow-hidden"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      alt="..."
                      src={team6}
                      className="shadow-lg rounded-full max-w-full mx-auto"
                      style={{
                        width: "auto",
                        marginTop: "-13px",
                        marginLeft: "4px",
                      }}
                    />
                  </div>
                </div>
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Jaqueline García</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Director de Recursos Humanos
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="flex justify-center items-center bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1">
                      <a href="https://www.instagram.com/jaquelinegarvaz/?hl=es-la">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
