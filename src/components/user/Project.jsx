import React from "react";
import { FaGithub } from "react-icons/fa6";

const Project = () => {
  return (
    <section id="project">
      <div className="nes-container container mx-auto mt-10 bg-slate-200 min-h-screen flex justify-center items-center rounded-xl">
        <div className="is-rounded w-full">
          <div className="carousel w-full mt-10">
            <div id="item1" className="carousel-item w-full justify-center">
              <div
                className="card w-96 bg-white p-5"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <figure className="px-10 pt-10">
                  <img
                    src="../images/monitoring.png"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h1 className="card-title">Dashboard Monitoring Porject</h1>
                  <h6 className="font-bold">PT.Citracom Inti Persada</h6>
                  <p>Full-Stack</p>
                  <div className="card-actions">
                    <a
                      href="https://github.com/Qurro2/Full-Stack-Monitoring-PHP"
                      target="_blank"
                      className="btn "
                    >
                      <FaGithub size={26} />
                    </a>
                    <button
                      className="nes-btn is-warning"
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      Fitur
                    </button>
                    <dialog id="my_modal_1" className="modal text-start">
                      <div className="modal-box bg-white">
                        <h3 className="font-bold text-lg">
                          Monitoring Project
                        </h3>
                        <div className="lists p-5">
                          <ul className="nes-list is-disc">
                            <li>User Login</li>
                            <li>User Role</li>
                            <li>User Profile</li>
                            <li>Grafik Chart</li>
                            <li>Progres Bar</li>
                            <li>Kabupaten Select</li>
                            <li>File Export/import</li>
                          </ul>
                        </div>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
            <div id="item2" className="carousel-item w-full justify-center">
              <div
                className="card w-96 bg-white p-5"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <figure className="px-10 pt-10">
                  <img
                    src="../images/node.png"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h1 className="card-title">
                    User create contact and address
                  </h1>
                  <h6 className="font-bold">Freelance</h6>
                  <p>Backend</p>
                  <div className="card-actions">
                    <a
                      href="https://github.com/Qurro2/Contact-And-Address-Back-End"
                      target="_blank"
                      className="btn "
                    >
                      <FaGithub size={26} />
                    </a>
                    <button
                      className="nes-btn is-warning"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                    >
                      Fitur
                    </button>
                    <dialog id="my_modal_2" className="modal text-start">
                      <div className="modal-box bg-white">
                        <h3 className="font-bold text-lg">
                          User create contact and address
                        </h3>
                        <div className="lists p-5">
                          <ul className="nes-list is-disc">
                            <li>User Login</li>
                            <li>User Authorization</li>
                            <li>Add Contact/Address</li>
                            <li>Update Contact/Address</li>
                            <li>Delete Contact/Address</li>
                            <li>Search with contact or address</li>
                          </ul>
                        </div>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
            <div id="item3" className="carousel-item w-full justify-center">
              <div
                className="card w-96 bg-white p-5"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <figure className="px-10 pt-10">
                  <img
                    src="../images/node.png"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h1 className="card-title">Portofolio Server</h1>
                  <h6 className="font-bold">-</h6>
                  <p>Backend</p>
                  <div className="card-actions">
                    <a
                      href="https://github.com/Qurro2/BE-Porto-Node.js"
                      target="_blank"
                      className="btn "
                    >
                      <FaGithub size={26} />
                    </a>
                    <button
                      className="nes-btn is-warning"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Fitur
                    </button>
                    <dialog id="my_modal_3" className="modal text-start">
                      <div className="modal-box bg-white">
                        <h3 className="font-bold text-lg">Portofolio Server</h3>
                        <div className="lists p-5">
                          <ul className="nes-list is-disc">
                            <li>User Login</li>
                            <li>User Authorization</li>
                            <li>User Profile</li>
                            <li>CRUD Data</li>
                            <li>Private url</li>
                            <li>Upload File</li>
                            <li>Pagination</li>
                          </ul>
                        </div>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
            <div id="item4" className="carousel-item w-full justify-center">
              <div
                className="card w-96 bg-white p-5"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <figure className="px-10 pt-10">
                  <img
                    src="../images/react.png"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h1 className="card-title">Portofolio</h1>
                  <h6 className="font-bold">-</h6>
                  <p>Frontend</p>
                  <div className="card-actions">
                    <a
                      href="https://github.com/Qurro2/FE-Porto-React"
                      target="_blank"
                      className="btn "
                    >
                      <FaGithub size={26} />
                    </a>
                    <button
                      className="nes-btn is-warning"
                      onClick={() =>
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      Fitur
                    </button>
                    <dialog id="my_modal_4" className="modal text-start">
                      <div className="modal-box bg-white">
                        <h3 className="font-bold text-lg">
                          Portofolio Frontend
                        </h3>
                        <div className="lists p-5">
                          <ul className="nes-list is-disc">
                            <li>UserPage</li>
                            <li>Login Form</li>
                            <li>Dashboard Admin</li>
                            <li>Admin Profile</li>
                            <li>Input Form User</li>
                            <li>Input Form Admin</li>
                            <li>Input File</li>
                            <li>Type Effect</li>
                            <li>Whatsapp Animation</li>
                          </ul>
                        </div>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
            <div id="item5" className="carousel-item w-full justify-center">
              <div
                className="card w-96 bg-white p-5"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <figure className="px-10 pt-10">
                  <img
                    src="../images/ssnetchil.png"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h1 className="card-title">Netflix</h1>
                  <h6 className="font-bold">Clone</h6>
                  <p>Frontend</p>
                  <div className="card-actions">
                    <a
                      href="https://github.com/Qurro2/FE-Netchill-React"
                      target="_blank"
                      className="btn "
                    >
                      <FaGithub size={26} />
                    </a>
                    <button
                      className="nes-btn is-warning"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      Fitur
                    </button>
                    <dialog id="my_modal_5" className="modal text-start">
                      <div className="modal-box bg-white">
                        <h3 className="font-bold text-lg">Netflix clone</h3>
                        <div className="lists p-5">
                          <ul className="nes-list is-disc">
                            <li>UserPage</li>
                            <li>Login Form</li>
                            <li>Akan ada update selanjutnya</li>
                          </ul>
                        </div>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
            //
          </div>
          <div className="flex justify-center w-full py-2 gap-2 mt-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
            <a href="#item5" className="btn btn-xs">
              5
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
