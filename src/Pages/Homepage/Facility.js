import React, { useState } from "react";

import bangunanAsrama from "../../Images/bangunanAsrama.png";
import modulPembelajaran from "../../Images/modulPembelajaran.png";
import akomodasiMakan from "../../Images/akomodasiMakan.png";
import sertifikat from "../../Images/sertifikat.png";
import camp from "../../Images/camp.png";

function Facility() {
  return (
    <div className="Tentang Naatiq my-32 lg:my-4 px-8 md:px-12 lg:px-16 xl:px-56">
      <h5 className="font-DM h5 text-blue-900 text-center px-8 ">Fasilitas yang Naatiq Internasional Arabiyyah berikan </h5>

      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <div className="w-3/4 md:w-auto border-2 rounded-2xl p-4 cursor-pointer hover:scale-105 transition duration-300 ">
          <img src={bangunanAsrama} className="" />
          <p className="mt-4 base-bold lg:xl-bold font-MD text-blue-900">Bangunan Asrama</p>
          <p className="mt-2 sm-regular lg:base-regular font-MD text-slate-700 lg:mt-2">Naatiq Institute Arabiyyah memiliki bangunan yang estetik dan memberi kenyamanan para pelajar dan pengajar</p>
        </div>
        <div className="w-3/4 md:w-auto border-2 rounded-2xl p-4 cursor-pointer hover:scale-105 transition duration-300 ">
          <img src={bangunanAsrama} className="" />
          <p className="mt-4 base-bold lg:xl-bold font-MD text-blue-900">Wifi Unlimited</p>
          <p className="mt-2 sm-regular lg:base-regular font-MD text-slate-700 lg:mt-2">Dengan fasilitas wifi Unlimited yang mudah diakses para pelajar dan pengajar</p>
        </div>
        <div className="w-3/4 md:w-auto border-2 rounded-2xl p-4 cursor-pointer hover:scale-105 transition duration-300 ">
          <img src={modulPembelajaran} className="" />
          <p className="mt-4 base-bold lg:xl-bold font-MD text-blue-900">Modul Pembelajaran</p>
          <p className="mt-2 sm-regular lg:base-regular font-MD text-slate-700 lg:mt-2">Pembelajaran Bahasa Arab dengan metode interaktif dari Qatar foundation dari Nol / dasar banget sampai terampil</p>
        </div>
        <div className="w-3/4 md:w-auto border-2 rounded-2xl p-4 cursor-pointer hover:scale-105 transition duration-300 ">
          <img src={akomodasiMakan} className="" />
          <p className="mt-4 base-bold lg:xl-bold font-MD text-blue-900">Akomodasi Makan</p>
          <p className="mt-2 sm-regular lg:base-regular font-MD text-slate-700 lg:mt-2">Naatiq Institute Arabiyyah memberikan akomodasi makan lengkap seperti kompor, magic com, peralatan dapur dan peralatan makan.</p>
        </div>
        <div className="w-3/4 md:w-auto border-2 rounded-2xl p-4 cursor-pointer hover:scale-105 transition duration-300 ">
          <img src={sertifikat} className="" />
          <p className="mt-4 base-bold lg:xl-bold font-MD text-blue-900">Sertifikat</p>
          <p className="mt-2 sm-regular lg:base-regular font-MD text-slate-700 lg:mt-2">Naatiq institute arabiyyah memberikan sertifikat keikutsertaan, sertifikat prestasi, sertifikat penghargaan dan sertifikat dari Qatar Foundation</p>
        </div>
        <div className="w-3/4 md:w-auto border-2 rounded-2xl p-4  cursor-pointer hover:scale-105 transition duration-300 ">
          <img src={camp} className="" />
          <p className="mt-4 base-bold lg:xl-bold font-MD text-blue-900">Camp</p>
          <p className="mt-2 sm-regular lg:base-regular font-MD text-slate-700 lg:mt-2">Camp yang nyaman dengan fasilitas didalamnya : kasur, kipas angin, kasur, bantal dan lemari</p>
        </div>
      </div>
    </div>
  );
}

export default Facility;
