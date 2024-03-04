import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { Link } from "react-scroll";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Tentukan warna navbar berdasarkan posisi scroll
  const navbarColor = scrollPosition > 20 ? "bg-white" : "bg-white";

  return (
    <div
      className={`navbar container rounded-badge mx-auto sticky top-0 left-0 right-0 z-10 ${navbarColor} shadow-2xl`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ${navbarColor}`}
          >
            <li>
              <Link
                to="/"
                spy={false}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Beranda
              </Link>
            </li>

            <li>
              <Link
                to="keterampilan"
                spy={false}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Keterampilan
              </Link>
            </li>
            <li>
              <Link
                to="pengalaman"
                spy={false}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Pengalaman
              </Link>
            </li>
            <li>
              <Link
                to="project"
                spy={false}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={false}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
        <a
          href="/"
          className="btn btn-ghost text-xl"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          Qurrota Ayun
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link to="/" spy={false} smooth={true} offset={-80} duration={500}>
              Beranda
            </Link>
          </li>

          <li>
            <Link
              to="keterampilan"
              spy={false}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Keterampilan
            </Link>
          </li>
          <li>
            <Link
              to="pengalaman"
              spy={false}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Pengalaman
            </Link>
          </li>
          <li>
            <Link
              to="project"
              spy={false}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={false}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Kontak
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex">
        <ul className="flex gap-3 p-1 sosmed">
          <li>
            <a
              href="https://www.linkedin.com/in/qurrota-ayun-a45a48256/"
              className="linked"
            >
              <FaLinkedin size={26} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Qurro2" className="github">
              <FaGithub size={26} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/qurrotaayun.2/"
              className="instagram"
            >
              <FaInstagram size={26} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
