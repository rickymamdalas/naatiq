import React from "react";
import "./Belajar.css";
import VideoPlayer from "react-video-js-player";

import mubtadi from "../../Video/mubtadi.mp4";
import mentalngomong from "../../Video/mentalngomong.mp4";
import mutakhosis from "../../Video/mutakhosis.mp4";
import mutamayyiz from "../../Video/mutamayyiz.mp4";
import mutaqoddim from "../../Video/mutaqoddim.mp4";
import mutawassit from "../../Video/mutawassit.mp4";
import senibahasa from "../../Video/senibahasa.mp4";
import tahfizulquran from "../../Video/tahfizulquran.mp4";

function Belajar() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center my-16 px-16 lg:px-56">
      <div className="mx-2">
        <VideoPlayer src={mubtadi} width="500" />
        <p className="text-blue-900 base-bold mt-2">Kelas Mubtadi</p>
      </div>
      <div className="">
        <VideoPlayer src={mutawassit} width="500" />
        <p className="text-blue-900 base-bold mt-2">Kelas Mutawassit</p>
      </div>
      <div className="">
        <VideoPlayer src={mutaqoddim} width="500" />
        <p className="text-blue-900 base-bold mt-2">Kelas Mutaqoddim</p>
      </div>
      <div className="">
        <VideoPlayer src={mutamayyiz} width="500" />
        <p className="text-blue-900 base-bold mt-2">Kelas Mutamayyiz</p>
      </div>
      <div className="">
        <VideoPlayer src={mutakhosis} width="500" />
        <p className="text-blue-900 base-bold mt-2">Kelas Mutakhosis</p>
      </div>
      <div className="">
        <VideoPlayer src={mentalngomong} width="500" />
        <p className="text-blue-900 base-bold mt-2">Kelas Mental Ngomong</p>
      </div>
      <div className="">
        <VideoPlayer src={tahfizulquran} width="500" />
        <p className="text-blue-900 base-bold mt-2">Kelas Tahfizul Qur'an</p>
      </div>
      <div className="">
        <VideoPlayer src={senibahasa} width="500" />
        <p className="text-blue-900 base-bold mt-2">Kelas Seni Bahasa</p>
      </div>
    </div>
  );
}

export default Belajar;
