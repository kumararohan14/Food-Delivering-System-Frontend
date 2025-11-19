import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import CarouseItem from './CarouseItem';
import { topMeet } from './topMeet';

function MultiItemCarousel() {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
    };
  return (
    <div>
        <Slider {...settings}>
            {topMeet.map((item) => (
                <CarouseItem 
                    image={item.image}
                    title={item.title}
                />
            ))}
        </Slider>
    </div>
  )
}

export default MultiItemCarousel