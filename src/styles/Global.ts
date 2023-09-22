import { createGlobalStyle } from "styled-components";

interface GlobalProps {
  isOpenMenu: boolean
}

export const GlobalStyles = createGlobalStyle<GlobalProps>`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 
  }

  body {
    font-family: 'Merriweather', serif;
    background-color: ${props => props.theme['bege']};
    font-size: 1.375rem;
    overflow: ${({ isOpenMenu }) => isOpenMenu ? 'hidden' : ''};
  
  }

  a{
    text-decoration: none;
  }

  li {
    list-style: none;
  }
  `