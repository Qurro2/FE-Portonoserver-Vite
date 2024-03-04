import React from "react";

export const Pengalaman = () => {
  return (
    <>
      <section id="pengalaman">
        <div className="container mx-auto mt-10 min-h-screen flex justify-center items-center">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className="timeline-start md:text-end mb-10"
                data-aos="fade-right"
              >
                <time className="font-mono italic">2023</time>
                <div className="text-lg font-black">
                  Software Engineer Backend
                </div>
                <div className="text-lg font-black">Freelance</div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10" data-aos="fade-left">
                <time className="font-mono italic">2022</time>
                <div className="text-lg font-black">Magang Full-Stack Web</div>
                <div className="text-md font-black">
                  PT.Citracom Inti Persada
                </div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className="timeline-start md:text-end mb-10"
                data-aos="fade-right"
              >
                <time className="font-mono italic">2019 - 2022</time>
                <div className="text-lg font-black">VFX Compositer</div>
                <div className="text-md font-black">PT.Qanary Studio</div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
