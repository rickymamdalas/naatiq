import React from "react";

function Footer() {
  return (
    <div className="text-center text-white grid grid-cols-1 py-24 px-8 md:px-12 lg:px-16 xl:px-56 bg-blue-900">
      <h5 className=" font-DM h5 lg:h4 lg:pr-5">Yuk.. Gabung dengan Naatiq sekarang</h5>
      <p className="text-center text-white base-regular xl:xl-regular pt-8 px-4 md:px-8 lg:px-48 lg:py-12">
        Gausah bingung kamu masih pemula banget atau ngomonya masih terikat dan terbata-bata. Kita akan bantu kamu <span className="text-yellow-400 font-bold">PEDE</span> dan Mahir Berbahasa Arab Seperti Pembicara Asli .. MAU.?
      </p>
      <button className="btn-primary text-blue-900 font-medium flex mx-auto mt-8">
        Gabung dengan Naatiq
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
}

export default Footer;
