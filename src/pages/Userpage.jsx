import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "../components/user/Home";
import Footer from "../components/navbar/Footer";
import Keterampilan from "../components/user/Keterampilan";
import Project from "../components/user/Project";
import { Pengalaman } from "../components/user/Pengalaman";
import Contact from "../components/user/Contact";
import Whatasappeffect from "../components/common/Whatasappeffect";

const user = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Keterampilan />
      <Pengalaman />
      <Project />
      <Contact />
      <Whatasappeffect />
      <Footer />
    </div>
  );
};

export default user;
