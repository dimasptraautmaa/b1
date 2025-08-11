import React from 'react'
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import "./swiper.css"
import "swiper/css";
import "swiper/css/effect-cards";

const SwiperCard = () => {
    return (
        <Swiper 
        effect='cards'
        className='mySwiper' 
        modules={[EffectCards]} 
        grabCursor={true} 
        >
            <SwiperSlide className='glass'>slide 1</SwiperSlide>
            <SwiperSlide className='glass'>slide 2</SwiperSlide>
            <SwiperSlide className='glass'>slide 3</SwiperSlide>
            <SwiperSlide className='glass'>slide 4</SwiperSlide>
            <SwiperSlide className='glass'>slide 5</SwiperSlide>
            <SwiperSlide className='glass'>slide 6</SwiperSlide>
        </Swiper>
    )
}

export default SwiperCard;