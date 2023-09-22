import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: #502314;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  >div{
    padding: 32px 24px 80px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 4rem;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const NavLinks1 = styled.nav`
  margin-top: 1.5rem;
  margin-bottom: 0.6rem;
  ul{
    display: flex;
    justify-content: center;
    gap: 24px;
    a{
      font-size: 22px;
      font-weight: bold;
      color: #fff;

      &:hover {
        border-bottom: 1px solid #fff;
      }
    }
    @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

export const NavLinks2 = styled.nav`
    ul{
    display: flex;
    justify-content: center;
    gap: 20px;
    
    a{
      font-size: 18px;
      color: #fff;
      
      &:hover {
        border-bottom: 1px solid #fff;
      }
    
    }
    @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  
`

