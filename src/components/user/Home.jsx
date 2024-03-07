import React from "react";
import TypingEffect from "../common/TypingEffect";

const Home = () => {
  const textToType = "Qurrota Ayun";
  return (
    <>
      <section id="/">
        <div className="hero min-h-screen bg-slate-200 container mx-auto rounded-badge mt-5">
          <div className="nes-container is-rounded">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="../images/PP.png"
                className="max-w-sm rounded-lg shadow-2xl"
                style={{ maxWidth: "80%", height: "auto" }}
              />
              <div>
                <h1 className="text-5xl font-bold">
                  <TypingEffect text={textToType} speed={350} />
                </h1>
                <p className="font-bold py-3 mt-2">
                  Software Engineer || Full-Stack Web
                </p>
                <p className="py-1">
                  Saya adalah lulusan S1 Jurusan Teknik Infromatika di
                  Universitas Nusamandiri, Telah memahami secara baik mengenai
                  pemrograman, pengembangan web dan aplikasi, pengembangan basis
                  data. Saya merupakan seorang yang berintegritas tinggi,
                  pribadi yang berorientasi pada pencapaian hasil yang unggul
                  dan mampu berkontribusi dalam lingkungan yang inovatif, Saya
                  telah memiliki pengalaman kerja/magang dengan nilai kinerja
                  yang baik. Saya siap bekerja sesuai dengan prosedur perusahaan
                  dan berikontribusi lebih secara konkret.
                </p>
                <a
                  href="../images/QurrotaAyun.pdf"
                  download
                  className="nes-btn"
                >
                  Curriculum Vitae
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
