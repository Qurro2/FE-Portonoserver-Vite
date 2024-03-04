import React, { useEffect, useState } from "react";
import Userpage from "./pages/Userpage";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main>
        <Userpage />
      </main>
    </>
  );
}

export default App;
