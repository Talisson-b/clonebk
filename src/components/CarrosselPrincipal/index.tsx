import { SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper-bundle.min.css';

import Img1 from '../../assets/img1.png'
import Img2 from '../../assets/img2.png'
import Img3 from '../../assets/img3.png'
import Img1Mobile from '../../assets/img1Mobile.png'
import Img2Mobile from '../../assets/Img2Mobile.png'
import Img3Mobile from '../../assets/Img3Mobile.png'

import { ButtonCarrossel, ButtonContainer, ContainerCarrossel, CustomSwiper } from "./styles.ts"

const Carrossel = () => {
 
  return (
      <ContainerCarrossel>
         <div>
         <CustomSwiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      loopPreventsSliding={false}
      
      >
          <SwiperSlide>
            <img srcSet={`${Img1Mobile} 767w, ${Img1} 1024w`} src={Img1} alt=""  />
          </SwiperSlide>
          <SwiperSlide>
            <img srcSet={`${Img2Mobile} 767w, ${Img2} 1024w`} src={Img2} alt=""  />
          </SwiperSlide>
          <SwiperSlide>
            <img srcSet={`${Img3Mobile} 767w, ${Img3} 1024w`} src={Img3} alt="" />
          </SwiperSlide>
          </CustomSwiper>
         </div>
          <ButtonContainer>
            <ButtonCarrossel>Clique e Retire</ButtonCarrossel>
          </ButtonContainer>
     </ContainerCarrossel>
         
    )
}

export default Carrossel