import React, { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y, Virtual, Controller,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import 'swiper/css/virtual';
import 'swiper/css/controller';
import 'swiper/css/autoplay';
import styles from "../Home/home.module.scss"
const SwiperFunc = ()=>{
    const [slides, setSlides] = useState([
        {
            id: 1,
            title: "Slide 1",
            description: "This is slide 1",
    
        },
        {
            id: 2,
            title: "Slide 2",
            description: "This is slide 2",
        },
        {
            id: 3,
            title: "Slide 3",
            description: "This is slide 3",
        },
        {
            id: 4,
            title: "Slide 4",
            description: "This is slide 4",
        },
        {
            id: 5,
            title: "Slide 5",
            description: "This is slide 5",
        },
        {
            id: 6,
            title: "Slide 6",
            description: "This is slide 6",
        },
        {
            id: 7,
            title: "Slide 7",
            description: "This is slide 7",
        },
        {
            id: 8,
            title: "Slide 8",
            description: "This is slide 8",
        },
        {
            id: 9,
            title: "Slide 9",
            description: "This is slide 9",
        },
        {
            id: 10,
            title: "Slide 10",
            description: "This is slide 10",
        },
    
    ])
    const [controlledSwiper , setControlledSwiper] = useState(null)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    useEffect(()=>{
        const handleResize = ()=> setIsMobile(window.innerWidth < 768)
        window.addEventListener('resize', handleResize)
        return ()=> window.removeEventListener('resize', handleResize)
    },[])

    const handleNext = ()=>{
        if(controlledSwiper){
            if (controlledSwiper.activeIndex === slides.length - 1) {
                controlledSwiper.slideTo(0,300);
            }
            else{
                controlledSwiper.slideNext();
            }
        }
    }

    const handlePrev = ()=>{
        if(controlledSwiper){
            if (controlledSwiper.activeIndex === 0) {
                controlledSwiper.slideTo(slides.length - 1,300)
            }
            else{
                controlledSwiper.slidePrev()
            }
        }
    }

    return(
        <section id={styles.swiperPart}>
 <div className={styles.swiperContainer}>
 <Swiper
             modules={[Navigation, Pagination, Scrollbar, A11y, Virtual, Autoplay ,Controller]}
             spaceBetween={50}
             slidesPerView={1}
             navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
             pagination={{ clickable: true }}
           
             virtual
             autoplay={{ delay: 4000, disableOnInteraction: false }}
             onSwiper={setControlledSwiper}
             onSlideChange={() => console.log('slide change')}
             loop={false}
           >
             {slides.map((slide, index) => (
               <SwiperSlide key={slide.id} virtualIndex={index}>
                 <div  className={styles.swiperslide} style={{borderRadius: '10px' }}>
                <h2>{slide.description}</h2>
                   
                 </div>
               </SwiperSlide>
             ))}
           </Swiper>
           <button className={styles.swiperbuttonprev} onClick={handlePrev}><FaArrowLeft /></button>
           <button className={styles.swiperbuttonnext} onClick={handleNext}><FaArrowRight /></button>
 </div>
        </section>
     )


  
}
export default SwiperFunc;