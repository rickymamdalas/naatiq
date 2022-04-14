import React from "react";
import gedungAsrama from "../../Images/gedung-asrama.png";

function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:my-4 px-8 md:px-12 lg:px-16 xl:px-56">
      <div>
        <img src={gedungAsrama} className="mb-4 lg:w-[700px] xl:w-[500px] " />
      </div>
      <div className="md:mt-4 lg:mt-0 lg:ml-8">
        <h2 className="font-DM h5 text-blue-900 mt-4 lg:mt-0 lg:mb-8 ">Tentang Naatiq Internasional Arabiyyah</h2>
        <p className="font-DM base-regular text-slate-700 mt-2 lg:mb-8 ">
          Naatiq Internasional Arabiyyah adalah lembaga Pelatihan bahasa dan Sastra Arab Berbasis Qatar Foundation Arab yang sudah berpengalaman, dikelola oleh pakar dan praktisi bahasa Arab lulusan Timur Tengah, Turki, Kampus dan Pondok
          Pesantren ternama yang Sudah Sangat sukses dalam merealisasikan bahasa Arab .
        </p>
        <button className="btn-primary flex items-center">
          Lihat selengkapnya
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default About;
