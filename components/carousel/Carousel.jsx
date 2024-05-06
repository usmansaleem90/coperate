'use client'

import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '@/public/images/slide1.svg'
import slide2 from '@/public/images/slide2.svg'
import slide3 from '@/public/images/slide3.svg'
import slide4 from '@/public/images/slide4.svg'
import slide5 from '@/public/images/slide5.svg'
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";



const SliderSyncing = () => {
    const mainSlider = useRef(null);
    const navSlider = useRef(null);


    const CustomNextArrow = ({ onClick }) => {
        return (
            <div className="absolute bg-white rounded-full p-3 right-7 top-1/2 transform -translate-y-1/2 cursor-pointer z-10" onClick={onClick}>
                <FaArrowRightLong className='text-[#1D4B7E] text-xl' />
            </div>
        );
    };

    const CustomPrevArrow = ({ onClick }) => {
        return (
            <div className="absolute bg-white rounded-full p-3 left-7 top-1/2 transform -translate-y-1/2 cursor-pointer z-10" onClick={onClick}>
                <FaArrowRightLong className='text-[#1D4B7E] rotate-180 text-xl' />
            </div>
        );
    };

    const settingsMain = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        asNavFor: navSlider.current
    };

    const settingsNav = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: false,
        focusOnSelect: true,
        asNavFor: mainSlider.current,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div>
            <Slider {...settingsMain} ref={mainSlider} className="slider-for">
                <div>
                    <Image alt='' src={slide1} className='w-full' />
                </div>
                <div>
                    <Image alt='' src={slide2} className='w-full' />
                </div>
                <div>
                    <Image alt='' src={slide3} className='w-full' />
                </div>
                <div>
                    <Image alt='' src={slide4} className='w-full' />
                </div>
                <div>
                    <Image alt='' src={slide5} className='w-full' />
                </div>

            </Slider>
            <Slider {...settingsNav} ref={navSlider} className="slider-nav">
                <div>
                    <Image alt='' src={slide1} />
                </div>
                <div>
                    <Image alt='' src={slide2} />
                </div>
                <div>
                    <Image alt='' src={slide3} />
                </div>
                <div>
                    <Image alt='' src={slide4} />
                </div>
                <div>
                    <Image alt='' src={slide5} />
                </div>
            </Slider>
        </div>
    );
};

export default SliderSyncing;
