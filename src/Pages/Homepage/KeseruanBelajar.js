import React from "react";
import VideoPlayer from "react-video-js-player";
import Sample from "../../Video/sample.mp4";

function KeseruanBelajar() {
  const videoSrc = Sample;

  return (
    <div className="Tentang Naatiq my-32 lg:grid-cols-2 px-8 md:px-12 lg:px-16 xl:px-56">
      <h5 className="font-DM h5 text-blue-900 font-bold lg:px-0 lg:text-4xl text-center mb-8">
        Yuk Intip dulu keseruan belajar di <br />
        Naatiq Internasional Arabiyyah
      </h5>

      <div className="flex justify-center my-16 text-center">
        <VideoPlayer src={videoSrc} width="500" />
      </div>
      <div className="flex justify-center my-16 text-center">
        <VideoPlayer src={videoSrc} width="500" />
      </div>

      <button className="btn-primary mx-auto flex">Lihat kegiatan lainnya</button>
    </div>
  );
}

export default KeseruanBelajar;
