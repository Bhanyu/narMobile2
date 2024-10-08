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
            title: "Al bir, aç min!",
            // description: "This is slide 1",
            slideImg:"https://nar.az/media/uploads/images/web_2_kXRzgfK.png"
    
        },
        {
            id: 2,
            title: "Sənə ən yaxın",
            description: "This is slide 2",
            slideImg:"https://nar.az/media/uploads/images/nar_SeCACaz.png",
            slideLink:"https://www.youtube.com/"
        },
        {
            id: 3,
            title: "FULL paketləri",
            description: "F10 yaz, 777-yə göndər",
            slideImg:"https://nar.az/media/uploads/images/techno_vyajpp7.png",
            slideLink:"https://www.youtube.com/"
        },
        {
            id: 4,
            title: "İnternet paketləri",
            description: "L yaz, 777-yə göndər",
            slideImg:"https://nar.az/media/uploads/images/internet_paketl%C9%99ri_7eR15Qb.png",
            slideLink:"https://www.youtube.com/"
        },
        {
            id: 5,
            title: "Nar-dan sərfəli smartfonlar",
            description: "Xiaomi və Tecno smartfonları artıq Nar mağazalarında!",
            slideImg:"https://nar.az/media/uploads/images/seneenyaxin_oyaywPA.png",
            slideLink:"https://www.youtube.com/"
        },
        {
            id: 6,
            title: "Sənə ən yaxın rəqəmsal həllər",
            // description: "This is slide 6",
            slideImg:"https://nar.az/media/uploads/images/full.png",
            slideLink:"https://www.youtube.com/"
        },
        {
            id: 7,
            title: "Dinlət",
            description: "Sənə zəng edənlərə tərzini Dinlət!",
            slideImg:"https://nar.az/media/uploads/images/web_2_kXRzgfK.png",
            slideLink:"https://www.youtube.com/"
        },
        {
            id: 8,
            title: "5G",
            description: "Nar 5G sürətini Sumqayıta gətirdi!",
            slideImg:"https://nar.az/media/uploads/images/circle_Ss1eoEt.png",
            slideLink:"https://www.youtube.com/"
        },
        {
            id: 9,
            title: "Nar-dan tam onlayn eSIM",
            description: "Azərbaycanda ilk dəfə üztanıma texnologiyası ilə",
            slideImg:"https://nar.az/media/uploads/images/Roaming_MnikKbU.png",
            slideLink:"https://www.youtube.com/"
        },
        {
            id: 10,
            title: "CavanNar 10",
            description: "C10 yaz, 777-yə göndər",
            slideImg:"https://nar.az/media/uploads/images/dinlet_UNpnr3i.png",
            slideLink:"https://www.youtube.com/"
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
               <div className={styles.slideDesc}>
               <h2>{slide.title}</h2>
               {
                slide.description ? <h4>{slide.description}</h4> : ""
               }
                {
                slide.slideLink ? <a href={slide.slideLink}>SALAM</a> : ""
               }
               </div>
               <div className={styles.slideImage}>
                <img src={slide.slideImg} alt={slide.title} />
               </div>
           
                 </div>
               </SwiperSlide>
             ))}
           </Swiper>
           <div className={styles.swiperPag}>
           <button className={styles.swiperbuttonprev} onClick={handlePrev}><FaArrowLeft /></button>
           <button className={styles.swiperbuttonnext} onClick={handleNext}><FaArrowRight /></button>
           </div>
          
 </div>
        </section>
     )


  
}
export default SwiperFunc;