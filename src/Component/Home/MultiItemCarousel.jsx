import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import CarouseItem from './CarouseItem';
import { topMeet } from './topMeet';

function MultiItemCarousel() {
  return (
    <div>
        <Slider>
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