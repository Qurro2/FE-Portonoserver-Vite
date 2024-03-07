import React, { useEffect, useState } from "react";
import Userpage from "./pages/Userpage";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet>
        <title>Qurrota Ayun</title>
        <link rel="icon" href="/world.svg" type="image/svg+xml" />
      </Helmet>
      <main>
        <Userpage />
      </main>
    </>
  );
}

export default App;
