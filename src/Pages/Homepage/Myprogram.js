import React, { useState } from "react";

function Myprogram() {
  return (
    <div className="Tentang Naatiq bg-blue-900 text-white my-32 py-16 grid grid-cols-1 lg:grid-cols-2 px-8 md:px-12 lg:px-16 xl:px-56">
      <div>
        <h5 className=" font-DM h5">Program Kami</h5>
      </div>

      <div className=" grid grid-cols-1 divide-y mt-4 md:mt-0 text-white">
        <div className="py-8 flex">
          <h4 className="font-DM xl-bold">1.</h4>
          <div>
            <p className="ml-4 font-DM xl-bold">Mental Ngomong</p>
            <p className="ml-4 mt-4 base-regular">Kelas yang di desain untuk BERANI dan PD berbahasa Arab</p>
          </div>
        </div>
        <div className="py-8 flex">
          <h4 className="font-DM font-bold text-xl md:text-xl">2.</h4>
          <div>
            <p className="ml-4 font-DM xl-bold">Mahir Berbahasa Seperti Pembira Asli</p>
            <p className="ml-4 mt-4 base-bold">
              A. Mubatadi
              <p className="ml-4 base-regular">(Mahir dan PD Bernahasa Arab)</p>
            </p>
            <p className="ml-4 mt-4 base-bold">
              B. Mutawashit
              <p className="ml-4 base-regular">(Mahir dan PD Bernahasa Arab)</p>
            </p>
            <p className="ml-4 mt-4 base-bold">
              C. Mutaqoddim
              <p className="ml-4 base-regular">(Mahir dan PD Bernahasa Arab)</p>
            </p>
          </div>
        </div>
        <div className="py-8 flex">
          <h4 className="font-DM xl-bold">3.</h4>
          <div>
            <h4 className="ml-4 xl-bold">Terjemah (Mutamayyiz)</h4>
            <p className="ml-4 mt-4 base-regular">Kelas Untuk Menguasai Terjemah Tulis dan Lisan Secara profesional </p>
          </div>
        </div>
        <div className="py-8 flex">
          <h4 className="font-DM xl-bold">4.</h4>
          <div>
            <h4 className="ml-4 xl-bold">Takhosshus Baca Kitab (Mutakhosshis)</h4>
            <p className="ml-4 mt-4 base-regular ">
              Kelas Untuk Menguasai Kaidah Nahhu Sorrof yang diaplikasikan pada kitab klasik (Turats), kitab kontemporer (Muaashir) dan Al qur’an
              <br />
              A. Jaulatul Ula
              <br />
              B. Jaulatul Tsaniyah
            </p>
          </div>
        </div>
        <div className="py-8 flex">
          <h4 className="font-DM xl-bold">5.</h4>
          <div>
            <h4 className="ml-4 font-DM xl-bold">Persiapan Timur Tengah</h4>
            <p className="ml-4 mt-4 base-regular">
              Kelas di desain Untuk Siap mengikuti Tes Beasiswa Timur tengah
              <br />
              A. Jaulatul Ula
              <br />
              B. Jaulatul Tsaniyah
            </p>
          </div>
        </div>
        <div className="py-8 flex">
          <h4 className="font-DM font-bold xl-bold">6.</h4>
          <div>
            <h4 className="ml-4 font-DM xl-bold">Tahfizul Qur’an</h4>
            <p className="ml-4 mt-4 base-regular">Program ini di desain Untuk Para Pecinta Al Qur'an Yang dibimbing Langsung Oleh Hafidz dan Hafidzoh Yang sangat Profesional Bersanad dan Ahli dalam Mencetak Pengahafal Al Qur'an</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myprogram;
