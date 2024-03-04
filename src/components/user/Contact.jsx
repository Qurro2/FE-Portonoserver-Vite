import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="container mx-auto mt-10">
          <div className="nes-container with-title w-full">
            <p className="title text-5xl font-bold">KONTAK SAYA</p>
            <div className="grid grid-cols-2 md:grid-cols-2">
              <div>
                <MdEmail className="text-blue-500 text-xl mr-2" size={26} />
                <p className="mb-2">kuriayun@gmail.com</p>
                {/* Menambahkan margin bawah */}
                <MdContactPhone
                  className="text-blue-500 text-xl mr-2"
                  size={26}
                />
                <p className="mb-2">+62 81315024442</p>
                <FaLocationDot
                  className="text-red-500 text-xl mr-2"
                  size={26}
                />
                <p>Tebet Timur, Jakarta Selatan</p>
              </div>
              <div className="flex items-center">
                <a href="//wa.me/6281315024442" target="_blank">
                  <button className="btn btn-success">
                    <IoLogoWhatsapp size={32} />
                    Whatsapp
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
