import React from "react";
import ustadulum from "../../Images/pengajar/ustadulum.png";
import ustadrifqi from "../../Images/pengajar/ustadrifqi.png";
import ustadaldialinusa from "../../Images/pengajar/ustadaldialinusa.png";
import ustadzahainina from "../../Images/pengajar/ustadzahainina.png";

function Teams() {
  return (
    <div className="lg:my-4 mx-8 my-24 md:px-12 lg:px-16 xl:px-56">
      <h5 className="font-DM h5 text-blue-900 text-center mt-24">Our Teams </h5>

      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <div className="w-3/4 md:w-auto border-2 rounded-3xl p-3">
          <img src={ustadulum} className="" />
          <h4 className="mt-2 base-bold lg:xl-bold text-center font-MD text-blue-900">Ustad Ulum</h4>
        </div>
        <div className="w-3/4 md:w-auto border-2 rounded-3xl p-3">
          <img src={ustadrifqi} className="" />
          <h4 className="mt-2 base-bold lg:xl-bold text-center font-MD font-bold text-blue-900 text-lg lg:text-2xl">Ustad Rifqi</h4>
        </div>
        <div className="w-3/4 md:w-auto border-2 rounded-3xl p-3">
          <img src={ustadaldialinusa} className="" />
          <h4 className="mt-2 base-bold lg:xl-bold text-center font-MD font-bold text-blue-900 text-lg lg:text-2xl">Ustad Aldi Alinusa</h4>
        </div>
        <div className="w-3/4 md:w-auto border-2 rounded-3xl p-3">
          <img src={ustadulum} className="" />
          <h4 className="mt-2 base-bold lg:xl-bold text-center font-MD font-bold text-blue-900 text-lg lg:text-2xl">Ustadzah Bunga</h4>
        </div>
        <div className="w-3/4 md:w-auto border-2 rounded-3xl p-3">
          <img src={ustadzahainina} className="" />
          <h4 className="mt-2 base-bold lg:xl-bold text-center font-MD font-bold text-blue-900 text-lg lg:text-2xl">Ustadzah Ainina</h4>
        </div>
      </div>
    </div>
  );
}

export default Teams;
