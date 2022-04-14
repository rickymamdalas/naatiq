import React from "react";
import Herosection from "../Pages/Pengajar/Herosection";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Teams from "./Pengajar/Teams";
import Tutor from "./Pengajar/Tutor";

const Pengajar = () => {
  return (
    <div>
      <Herosection />
      <Teams />
      <Tutor />
      <Footer />
    </div>
  );
};

export default Pengajar;
