import React, { Component } from "react";
import Slider from "react-slick";

import ustadulum from "../../Images/pengajar/ustadulum.png";
import ustadrifqi from "../../Images/pengajar/ustadrifqi.png";
import ustadaldialinusa from "../../Images/pengajar/ustadaldialinusa.png";
import ustadhasbi from "../../Images/pengajar/ustadhasbi.png";
import ustadmaulana from "../../Images/pengajar/ustadmaulana.png";
import ustadshohib from "../../Images/pengajar/ustadshohib.png";
// import ustadriza from "../../Images/pengajar/ustadriza.png";
import ustadabel from "../../Images/pengajar/ustadabel.png";
// import ustadaldi from "../../Images/pengajar/ustadaldi.png";
// import ustadmalik from "../../Images/pengajar/ustadmalik.png";
import ustadzahainina from "../../Images/pengajar/ustadzahainina.png";
import ustadzahsyavna from "../../Images/pengajar/ustadzahsyavna.png";
import ustadzahsavtha from "../../Images/pengajar/ustadzahsavtha.png";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className=" lg:my-4 px-8 md:px-12 lg:px-16 xl:px-56 bg-blue-200 py-24">
        <h2 className="font-DM text-3xl text-blue-900 font-bold text-center px-24 lg:px-24 mb-16">Our Tutors </h2>
        <Slider {...settings} className=" ">
          <div className="p-4  ">
            <div className="p-3 rounded-2xl bg-white">
              <img src={ustadulum} />
              <p className="mt-2 base-bold lg:xl-bold text-center font-MD text-blue-900">Ustad Ulum</p>
            </div>
          </div>
          <div className="p-4  ">
            <div className="p-3 rounded-2xl bg-white">
              <img src={ustadrifqi} />
              <p className="mt-2 base-bold lg:xl-bold text-center font-MD text-blue-900">Ustad Rifqi</p>
            </div>
          </div>
          <div className="p-4  ">
            <div className="p-3 rounded-2xl bg-white">
              <img src={ustadaldialinusa} />
              <p className="mt-2 base-bold lg:xl-bold text-center font-MD text-blue-900">Ustad Aldi Ali Nusa</p>
            </div>
          </div>
          <div className="p-4  ">
            <div className="p-3 rounded-2xl bg-white">
              <img src={ustadhasbi} />
              <p className="mt-2 base-bold lg:xl-bold text-center font-MD text-blue-900">Ustad Hasbi</p>
            </div>
          </div>
          <div className="p-4  ">
            <div className="p-3 rounded-2xl bg-white">
              <img src={ustadmaulana} />
              <p className="mt-2 base-bold lg:xl-bold text-center font-MD text-blue-900">Ustad Maulana, Lc</p>
            </div>
          </div>
          <div className="p-4  ">
            <div className="p-3 rounded-2xl bg-white">
              <img src={ustadshohib} />
              <p className="mt-2 base-bold lg:xl-bold text-center font-MD text-blue-900">Ustad Shohib</p>
            </div>
          </div>
          <div className="p-4  ">
            <div className="p-3 rounded-2xl bg-white">
              <img src={ustadhasbi} />
              <p className="mt-2 base-bold lg:xl-bold text-center font-MD text-blue-900">Ustad Riza</p>
            </div>
          </div>
          <div className="p-4  ">
            <div className="p-3 rounded-2xl bg-white">
              <img src={ustadabel} />
              <p className="mt-2 base-bold lg:xl-bold text-center font-MD text-blue-900">Ustad Abel</p>
            </div>
          </div>
          <div className="p-4  ">
            <div className="p-3 rounded-2xl bg-white">
              <img src={ustadabel} />
              <p className="mt-2 base-bold lg:xl-bold text-center font-MD text-blue-900">Ustad Aldi</p>
            </div>
          </div>
          <div className="p-4  ">
            <div className="p-3 rounded-2xl bg-white">
              <img src={ustadhasbi} />
              <p className="mt-2 base-bold lg:xl-bold text-center font-MD text-blue-900">Ustad Malik</p>
            </div>
          </div>
          <div className="p-4  ">
            <div className="p-3 rounded-2xl bg-white">
              <img src={ustadzahainina} />
              <p className="mt-2 base-bold lg:xl-bold text-center font-MD text-blue-900">Ustadzah Ainina</p>
            </div>
          </div>
          <div className="p-4  ">
            <div className="p-3 rounded-2xl bg-white">
              <img src={ustadzahsyavna} />
              <p className="mt-2 base-bold lg:xl-bold text-center font-MD text-blue-900">Ustadzah Syavna</p>
            </div>
          </div>
          <div className="p-4  ">
            <div className="p-3 rounded-2xl bg-white">
              <img src={ustadzahsavtha} />
              <p className="mt-2 base-bold lg:xl-bold text-center font-MD text-blue-900">Ustadzah Syavta</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
