import React from "react";
import { useState } from "react";

function Dataanalist() {
  const [datas, setDatas] = useState([
    { angka: 1.483, text: "Alumni" },
    { angka: 15, text: "Kelas" },
    { angka: 55, text: "Tutor" },
    { angka: 7, text: "Camp" },
  ]);

  return (
    <div className="my-32">
      <div className="grid grid-cols-2 lg:flex justify-between gap-8 mx-16 lg:px-40 lg:my-64 px-8 md:px-12">
        <div className="text-center">
          <h4 className="h4 lg:h3 text-blue-900">1.485</h4>
          <p className="base-regular text-slate-700">Alumni</p>
        </div>
        <div className="text-center">
          <h4 className="h4 lg:h3 text-blue-900">15</h4>
          <p className="base-regular text-slate-700">Kelas</p>
        </div>
        <div className="text-center">
          <h4 className="h4 lg:h3 text-blue-900">55</h4>
          <p className="base-regular text-slate-700">Tutor</p>
        </div>
        <div className="text-center">
          <h4 className="h4 lg:h3 text-blue-900">7</h4>
          <p className="base-regular text-slate-700">Camp</p>
        </div>

        {/* {datas.map((data) => (
          <div className="grid grid-cols-3">
            <ul>
              <li className="h4 font-DM text-blue-900">{data.angka}</li>
              <li className="base-regular font-DM text-slate-500">{data.text}</li>
            </ul>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Dataanalist;
