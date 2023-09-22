import styled from 'styled-components'

export const ClubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d62300;
  color: #000;

  @media screen and (max-width: 1024px) {
    margin-top: 50px;
    padding: 15px 15px 0px 15px;
  }

`

export const ClubContent = styled.div`
  display: flex;
  align-items: center;
  gap: 150px;
  margin-top: 60px;

  @media screen and (max-width: 1024px) {
    gap: 15px;

    img {
      max-width: 160px;
    }
  }
`

export const ClubDescription = styled.div`
  max-width: 550px;

  h2 {
    font-size: 5rem;
    line-height: 1.05;
    font-weight: 900;
    color: ${props => props.theme['white']};
  }

  >div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    img{
      width: 260px;
    }
  }

  @media screen and (max-width: 1024px) {
    h2 {
      font-size: 26px;
      line-height: 1.2;
    }

   >div {
    display: block;
    img { 
      width: 100px;
    }
   }
  }
`