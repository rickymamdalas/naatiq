import React, { Component } from "react";
import Slider from "react-slick";

import testimoni1 from "../../Images/testimonials/testimoni1.png";
import testimoni2 from "../../Images/testimonials/testimoni2.png";
import testimoni3 from "../../Images/testimonials/testimoni3.png";
import testimoni4 from "../../Images/testimonials/testimoni4.png";
import testimoni5 from "../../Images/testimonials/testimoni5.png";
import testimoni6 from "../../Images/testimonials/testimoni6.png";
import testimoni7 from "../../Images/testimonials/testimoni7.png";
import testimoni8 from "../../Images/testimonials/testimoni8.png";
import testimoni9 from "../../Images/testimonials/testimoni9.png";
import testimoni10 from "../../Images/testimonials/testimoni10.png";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
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

    const images = [testimoni1, testimoni2, testimoni3, testimoni4, testimoni5, testimoni6, testimoni7, testimoni8, testimoni9, testimoni10];

    return (
      <div className="grid grid-cols-1 py-24 lg:my-4 px-8 md:px-12 lg:px-16 xl:px-56 bg-blue-200">
        <h5 className="font-DM h5 text-blue-900 ld mb-16 md:mb-24 lg:mt-0 lg:mb-8 text-center">
          Apa kata mereka setelah belajar di <br></br>Naatiq Internasional Arabiyyah{" "}
        </h5>

        <Slider {...settings}>
          <div className="px-4">
            <img src={testimoni1} />
          </div>
          <div className="px-4">
            <img src={testimoni2} />
          </div>
          <div className="px-4">
            <img src={testimoni3} />
          </div>
          <div className="px-4">
            <img src={testimoni4} />
          </div>
          <div className="px-4">
            <img src={testimoni5} />
          </div>
          <div className="px-4">
            <img src={testimoni6} />
          </div>
          <div className="px-4">
            <img src={testimoni7} />
          </div>
          <div className="px-4">
            <img src={testimoni8} />
          </div>
          <div className="px-4">
            <img src={testimoni9} />
          </div>
          <div className="px-4">
            <img src={testimoni10} />
          </div>
        </Slider>
      </div>
    );
  }
}
