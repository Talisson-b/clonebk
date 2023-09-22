import styled from 'styled-components'
import { animated } from 'react-spring';


interface HeaderProps {
  sticky: string
}

interface MenuProps {
  open: boolean
}

export const ContainerHeader = styled(animated.header) <HeaderProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: ${({ sticky }) => sticky ? 'sticky' : 'static'};
  z-index: 999;
  background-color: ${props => props.theme['bege']};

  >div {
    img {
      max-width: 100%;
      width: 100%;
    }
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }

`

export const ContainerNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    margin-right: 6rem;
  }
  
     img {
      width: 5rem;  
    }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  a {
    color: ${props => props.theme['color-text']};
    font-family: 'Merriweather', serif;
    font-weight: 900;
  }
`

export const MenuMobile = styled.div`
@media screen and (min-width: 1024px){
  display: none;
}
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  bottom: 0;
  width: 100%;
  padding-inline: 15px;
  padding-bottom: 3px;
  padding-top: 10px;

  background-color: ${props => props.theme['bege']};

  div {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: end;

  }
  ul {
    a{
      font-size: 10px;
      color: #9d8273;
      font-size: 12px;
      font-weight: 900;
    }
  }
  
  img {
    width: 21px;
  }
`
export const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  padding-bottom: 3px;

   span{ 
     font-size: 12px;
     color: #9d8273;
     font-weight: 900;
   }

`

export const MenuContent = styled.div<MenuProps>`
  padding: 15px 15px 35px;
  background-color: #d42300;
  min-height: 100vh;
  display: ${({ open }) => open ? 'block' : 'none'};
  img {
    width: 48px;
  }
  
  ul{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 25px;    
    a{
      color: #fff;
      font-weight: 900;
    }
  }
`