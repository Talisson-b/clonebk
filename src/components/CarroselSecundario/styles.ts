import styled from 'styled-components'
import { Swiper } from 'swiper/react';

export const ContainerCarrossel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 720px;
  height: 100%;
  margin-top: 2rem;
  
  
  img {
    width: 100%;
    max-height: 720px;
  }

  @media screen and (max-width: 1024px) {
   
  }
`
export const CustomSwiper = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    font-size: 24px;
  }

  @media screen and (max-width: 1024px) {
    min-height: 100%;
    border-radius: 20px;
    margin: 10px;
    /* overflow: hidden; */

  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -4.5rem;
`

export const ButtonCarrossel = styled.button`
  width: 16rem;
  padding: 0.85rem;
  border: none;
  background: #d42300;
  border-radius: 8px;
  font-family: 'Bebas Neue', sans-serif;
  font-weight: bold;
  letter-spacing: .1rem;
  color: ${props => props.theme['bege']};
  z-index: 1;

`

export const Wrapper = styled.div`
  position: relative;
`

