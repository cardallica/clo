import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image01 from '../assets/homepage_carousel_01.png';
export default class Carousel extends React.Component {
	render() {
    var settings = {
    	arrows: false,
    	autoplay: true,
    	autoplaySpeed: 10000,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <img src={image01} alt="01" />
        <img src={image01} alt="02" />
        <img src={image01} alt="03" />
      </Slider>
    );
  }
}