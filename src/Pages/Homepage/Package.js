import React, { useState } from "react";
import CardPackage from "../../Components/CardPackage";
import Icon from "../../Images/icon/check.svg";

function Package() {
  const icon = { Icon };

  const [paket, setPaket] = useState([
    {
      tittle: "2 MINGGU",
      price: 650000,
      list1: "Asrama Arabic Area",
      list2: "Pengajar Profesional dan Berprestasi",
      list3: "Metode Belajar berbasis qatar foundation",
      list4: "Suasana Belajar yang nyaman di lingkungan yang edukatif kampung bahasa pare",
      list5: "ID Card, Kaos, Goodie bag, Kitab Metode Naatiq, ATM Internasional ",
      list6: "3 Sertifikat Resmi Naatiq Berbasis Internasional",
    },
    {
      tittle: "1 BULAN",
      price: 850000,
      list1: "Asrama Arabic Area",
      list2: "Pengajar Profesional dan Berprestasi",
      list3: "Metode Belajar berbasis qatar foundation",
      list4: "Suasana Belajar yang nyaman di lingkungan yang edukatif kampung bahasa pare",
      list5: "ID Card, Kaos, Goodie bag, Kitab Metode Naatiq, ATM Internasional ",
      list6: "3 Sertifikat Resmi Naatiq Berbasis Internasional",
      list7: "Free Pelajaran Tambahan (Darsin Idhofi)",
    },
    {
      tittle: "2 BULAN",
      price: 1590000,
      list1: "Asrama Arabic Area",
      list2: "Pengajar Profesional dan Berprestasi",
      list3: "Metode Belajar berbasis qatar foundation",
      list4: "Suasana Belajar yang nyaman di lingkungan yang edukatif kampung bahasa pare",
      list5: "ID Card, Kaos, Goodie bag, Kitab Metode Naatiq, ATM Internasional ",
      list6: "3 Sertifikat Resmi Naatiq Berbasis Internasional",
      list7: "Free Pelajaran Tambahan (Darsin Idhofi)",
      list8: "Free Pengembangan Skill dan Minat Bakat",
    },
    {
      tittle: "3 BULAN",
      price: 2350000,
      list1: "Asrama Arabic Area",
      list2: "Pengajar Profesional dan Berprestasi",
      list3: "Metode Belajar berbasis qatar foundation",
      list4: "Suasana Belajar yang nyaman di lingkungan yang edukatif kampung bahasa pare",
      list5: "ID Card, Kaos, Goodie bag, Kitab Metode Naatiq, ATM Internasional ",
      list6: "3 Sertifikat Resmi Naatiq Berbasis Internasional",
      list7: "Free Pelajaran Tambahan (Darsin Idhofi)",
      list8: "Free Pengembangan Skill dan Minat Bakat",
      list9: "Tahdid Mustawa",
      list10: "Rekomendasi (Tazkiah)",
      list11: "Leadership",
      list12: "Bimbingan Entrepreneur",
    },
    {
      tittle: "7 BULAN",
      price: 4000000,
      list1: "Asrama Arabic Area",
      list2: "Pengajar Profesional dan Berprestasi",
      list3: "Metode Belajar berbasis qatar foundation",
      list4: "Suasana Belajar yang nyaman di lingkungan yang edukatif kampung bahasa pare",
      list5: "ID Card, Kaos, Goodie bag, Kitab Metode Naatiq, ATM Internasional ",
      list6: "3 Sertifikat Resmi Naatiq Berbasis Internasional",
      list7: "Free Pelajaran Tambahan (Darsin Idhofi)",
      list8: "Free Pengembangan Skill dan Minat Bakat",
      list9: "Tahdid Mustawa",
      list10: "Rekomendasi (Tazkiah)",
      list11: "Leadership",
      list12: "Bimbingan Entrepreneur",
      list13: "Bimbingan Menjadi Tutor Profesional (Teori, Praktek, dan Penguasaan)",
    },
  ]);
  return (
    <div className="text-center text-white py-24 px-8 md:px-12 lg:px-16 xl:px-56 relative">
      <h5 className=" font-DM h5 lg:pr-5 text-blue-900">Paket pembelajaran Naatiq Internasional Arabiyyah</h5>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 py-24 justify-items-center ">
        <div className="card divide-y divide-blue-400 bg-blue-50 rounded-3xl py-4 px-4  cursor-pointer hover:scale-105 transition duration-300  w-80">
          <div className="text-center text-blue-900 py-4">
            <p className="font-medium py-2">2 MINGGU</p>
            <h3 className="text-3xl font-bold"> Rp. 650.000</h3>
          </div>
          <div>
            <div className="flex  text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Asrama Arabic Area</h3>
            </div>
            <div className="flex text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Pengajar Profesional Dan Beprestasi </h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Metode Belajar berbasis Qataar</h3>
            </div>
            <div className="flex  text-slate-800">
              <img src={Icon} />
              <h3 className="text-left  font-medium py-2 ml-2">Suasana Belajar yang nyaman di lingkungan yang edukatif kampung bahasa pare</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">ID Card, Kaos, Goodie bag, Kitab Metode Naatiq, ATM Internasional</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">1 Sertifikat Resmi Naatiq Berbasis Internasional</h3>
            </div>
          </div>
        </div>

        <div className="card divide-y divide-blue-400 bg-blue-50 rounded-3xl py-4 px-4 cursor-pointer hover:scale-105 transition duration-300  w-80">
          <div className="text-center text-blue-900 py-4">
            <p className="font-medium py-2">1 BULAN</p>
            <h3 className="text-3xl font-bold"> Rp. 850.000</h3>
          </div>
          <div>
            <div className="flex text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Asrama Arabic Area</h3>
            </div>
            <div className="flex text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Pengajar Profesional Dan Beprestasi </h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Metode Belajar berbasis Qataar</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Suasana Belajar yang nyaman di lingkungan yang edukatif kampung bahasa pare</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">ID Card, Kaos, Goodie bag, Kitab Metode Naatiq, ATM Internasional</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">2 Sertifikat Resmi Naatiq Berbasis Internasional</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Free Pelajaran Tambahan (Darsin Idhofi)</h3>
            </div>
          </div>
        </div>

        <div className="card divide-y divide-blue-400 bg-blue-50 rounded-3xl py-4 px-4  cursor-pointer hover:scale-105 transition duration-300  w-80">
          <div className="text-center text-blue-900 py-4">
            <p className="font-medium py-2">2 BULAN</p>
            <h3 className="text-3xl font-bold"> Rp. 1.590.000</h3>
          </div>
          <div>
            <div className="flex text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Asrama Arabic Area</h3>
            </div>
            <div className="flex text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Pengajar Profesional Dan Beprestasi </h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Metode Belajar berbasis Qataar</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Suasana Belajar yang nyaman di lingkungan yang edukatif kampung bahasa pare</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">ID Card, Kaos, Goodie bag, Kitab Metode Naatiq, ATM Internasional</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">2 Sertifikat Resmi Naatiq Berbasis Internasional</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Free Pelajaran Tambahan (Darsin Idhofi)</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Free Pengembangan Skill dan Minat Bakat</h3>
            </div>
          </div>
        </div>

        <div className="card divide-y divide-blue-400 bg-blue-50 rounded-3xl py-4 px-4  cursor-pointer hover:scale-105 transition duration-300  w-80">
          <div className="text-center text-blue-900 py-4">
            <p className="font-medium py-2">3 BULAN</p>
            <h3 className="text-3xl font-bold"> Rp. 2.350.000</h3>
          </div>
          <div>
            <div className="flex text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Asrama Arabic Area</h3>
            </div>
            <div className="flex text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Pengajar Profesional Dan Beprestasi </h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Metode Belajar berbasis Qataar</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Suasana Belajar yang nyaman di lingkungan yang edukatif kampung bahasa pare</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">ID Card, Kaos, Goodie bag, Kitab Metode Naatiq, ATM Internasional</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">2 Sertifikat Resmi Naatiq Berbasis Internasional</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Free Pelajaran Tambahan (Darsin Idhofi)</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Free Pengembangan Skill dan Minat Bakat</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Tahdid Mustawa</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Rekomendasi (Tazkiah)</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Leadership</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Bimbingan Entrepreneur</h3>
            </div>
          </div>
        </div>

        <div className="card divide-y divide-blue-400 bg-blue-50 rounded-3xl py-4 px-4  cursor-pointer hover:scale-105 transition duration-300 w-80">
          <div className="text-center text-blue-900 py-4">
            <p className="font-medium py-2">7 BULAN</p>
            <h3 className="text-3xl font-bold"> Rp. 4.000.000</h3>
          </div>
          <div>
            <div className="flex text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Asrama Arabic Area</h3>
            </div>
            <div className="flex text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Pengajar Profesional Dan Beprestasi </h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Metode Belajar berbasis Qataar</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Suasana Belajar yang nyaman di lingkungan yang edukatif kampung bahasa pare</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">ID Card, Kaos, Goodie bag, Kitab Metode Naatiq, ATM Internasional</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">2 Sertifikat Resmi Naatiq Berbasis Internasional</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Free Pelajaran Tambahan (Darsin Idhofi)</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Free Pengembangan Skill dan Minat Bakat</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Tahdid Mustawa</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Rekomendasi (Tazkiah)</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Leadership</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Bimbingan Entrepreneur</h3>
            </div>
            <div className="flex items-center text-slate-800">
              <img src={Icon} />
              <h3 className="text-left font-medium py-2 ml-2">Bimbingan Menjadi Tutor Profesional (Teori, Praktek, dan Penguasaan)</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="w-80 h-80 bg-blue-200 rounded-full absolute -z-10 blur-3xl top-12 animate-pulse">
        <img src={Icon} className="opacity-0" />
      </div>
    </div>
  );
}

export default Package;
