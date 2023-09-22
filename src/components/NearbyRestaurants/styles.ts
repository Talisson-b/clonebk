import styled from 'styled-components'
import { FaSistrix } from 'react-icons/fa'

export const NearbyContainer = styled.div`
  display: flex;
  max-width: 780px;
  width: 100%;
  margin-inline: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  font-weight: 900;
  color: ${props => props.theme['color-text']};

 h2 {
  font-size: 3rem;
  font-weight: 900;
  color: ${props => props.theme['color-text']};
 }

 h4{
  color: ${props => props.theme['color-text']};
  font-weight: 900;
  margin-top: 1.5rem;
 }

 @media screen and (max-width: 1024px) {
  padding: 15px;
    h2{
      font-size: 25px;
    }

    h4{
      font-size: 16px;
    }
  }
`
export const FormNearbyRestaurant = styled.form`
  width: 100%;
  position: relative;
  margin-bottom: 1.5rem;
`

export const NeabyRestaurantsInput = styled.input`
  width: 100%;
  margin-inline: auto;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #9a9a9a;
  text-align: center;
  font-family: 'Merriweather', serif;
  font-weight: 900;
  margin-top: 0.5rem;

  &:focus {
    outline: none;
  }

  `

export const Icon = styled(FaSistrix)`
  position: absolute;
  top: 22px;
  right: 8px;
  color: #9a9a9a;
`

export const DescriptionNearby = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.001rem;
  max-width: 320px;
  text-align: center;
  line-height: 1.3;
  margin-block: 8px 16px;
`
export const Button = styled.button`
  padding: 0.75rem;
  font-size: 16px;
  font-family: 'Merriweather', serif;
  font-weight: 900;
  margin-bottom: 2.5rem;
  color: ${props => props.theme['bege']};
  background: #d42300;
  border: none;
  border-radius: 8px;
  width: 50%;

 @media screen and (max-width: 1024px) {
  width: 90%;

 }
`