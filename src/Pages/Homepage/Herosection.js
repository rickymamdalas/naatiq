import React from "react";
import img1 from "../../Images/hero-img-1.png";
import img2 from "../../Images/hero-img-2.png";

function Herosection() {
  return (
    <div className="Hero-section bg-blue-900 relative ">
      <div className="container mx-auto flex-col flex md:h-[800px] h-[500px] min-w-min">
        <h1 className="h5 lg:h3 xl:h2 text-center text-white pt-16 ">
          Lembaga Kursus <br />
          Bahasa dan Sastra Arab
        </h1>
        <p className="base-regular xl:xl-regular text-center text-white py-8 px-8 md:px-8 lg:px-24">
          Gausah bingung kamu masih pemula banget atau ngomonya masih terikat dan terbata-bata. Kita akan bantu kamu <span className="text-yellow-400 font-bold">PEDE</span> dan Mahir Berbahasa Arab Seperti Pembicara Asli .. MAU.?
        </p>
        <button className="btn-primary mt-8 mx-auto">Bergabung dengan Naatiq</button>
      </div>

      <img src={img1} className="hidden md:block absolute bottom-0 left-20 md:w-64 md:left-10 lg:w-72 lg:left-20 " />
      <img src={img2} className="hidden md:block absolute -bottom-0 right-20 md:w-64 md:right-10 lg:w-72 lg:right-20" />
    </div>
  );
}

export default Herosection;
