import React, { useState } from "react";

function Whynaatiq() {
  const [datas, setDatas] = useState([
    { nomor: 1, space: ".", text: "Menggunakan Metode Tercepat dengan strategi Qatar foundation" },
    { nomor: 2, space: ".", text: "Tutor Profesional yang sudah berpengalaman & berprestasi" },
    { nomor: 3, space: ".", text: "Suasana Sangat edukatif, inspiratif, inovatif dan aplikatif" },
    { nomor: 4, space: ".", text: "Belajar lebih seru & efektif. Teori, Praktek dan penguasaan." },
    { nomor: 5, space: ".", text: "Suasana kekeluargaan serta solidaritas. Antum pasti nyaman dan betah" },
    { nomor: 6, space: ".", text: "Gratis Mengulang dibulan selanjutnya." },
    { nomor: 7, space: ".", text: "Sesuai Potensi, kemampuan dan skill antum." },
    { nomor: 8, space: ".", text: "Gratis Untuk Pendalaman setelah lulus Mutaqoddim" },
  ]);

  return (
    <div className="Tentang Naatiq my-32 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 px-8 md:px-12 lg:px-16 xl:px-56">
      <div>
        <h5 className="font-DM h5 text-blue-900 font-bold lg:text-4xl">Mengapa Harus Naatiq Internasional Arabiyyah ?</h5>
      </div>

      <div className="font-DM base-regular text-slate-700 grid grid-cols-1 divide-y mt-4">
        {datas.map((data) => (
          <p className="mr-4 py-4 flex">
            {data.nomor}

            <p className="ml-2"> {data.text}</p>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Whynaatiq;
