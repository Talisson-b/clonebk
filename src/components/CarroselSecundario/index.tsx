import {useEffect, useState} from 'react'
import { SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper-bundle.min.css';

import Img4 from '../../assets/Img4.jpg'
import Img5 from '../../assets/Img5.jpg'
import Img6 from '../../assets/Img6.jpg'
import Img4Mobile from '../../assets/Img4Mobile.jpg'
import Img5Mobile from '../../assets/Img5Mobile.jpg'
import Img6Mobile from '../../assets/Img6Mobile.jpg'

import { ButtonCarrossel, ButtonContainer, ContainerCarrossel, CustomSwiper } from "./styles.ts"

const CarrosselSecundario = () => {
  const [swiperSettings, setSwiperSettings] = useState({
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: { delay: 250, disableOnInteraction: false },
    loop: true
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setSwiperSettings({
          slidesPerView: 1.1,
          spaceBetween: 10,
          centeredSlides: true,
          autoplay: { delay: 250, disableOnInteraction: false },
          loop: true
        });
      } else {
        setSwiperSettings({
          slidesPerView: 1,
          spaceBetween: 10,
          centeredSlides: true,
          autoplay: { delay: 250, disableOnInteraction: false },
          loop: true
        });
      }
    };

    // Adiciona um event listener para escutar mudanças no tamanho da tela
    window.addEventListener('resize', handleResize);

    // Executa handleResize quando o componente monta
    handleResize();

    // Remove o event listener quando o componente desmonta
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
      <ContainerCarrossel>
         <div>
         <CustomSwiper {...swiperSettings}>
          <SwiperSlide>
            <img srcSet={`${Img4Mobile} 767w, ${Img4} 1024w`} src={Img4} alt=""  />
          </SwiperSlide>
          <SwiperSlide>
            <img srcSet={`${Img5Mobile} 767w, ${Img5} 1024w`} src={Img5} alt=""  />
          </SwiperSlide>
          <SwiperSlide>
            <img srcSet={`${Img6Mobile} 767w, ${Img6} 1024w`} src={Img6} alt="" />
          </SwiperSlide>
          </CustomSwiper>
         </div>
          <ButtonContainer>
            <ButtonCarrossel>Ver Mais</ButtonCarrossel>
          </ButtonContainer>
     </ContainerCarrossel>
         
    )
}

export default CarrosselSecundario