import cluBk from '../../assets/ClubeBK.png'
import apple from '../../assets/apple.png'
import google from '../../assets/google.png'
import { ClubContainer, ClubContent, ClubDescription } from './styles'

const ClubeBk = () => {
  return (
    <ClubContainer>
      <ClubContent>
        <img src={cluBk} alt="" />
      <ClubDescription>
        <h2>
          Baixe nosso App e tenha o BK na palma da sua mão!
        </h2>
           <div>
            <img src={apple} alt="" />
            <img src={google} alt="" />
           </div>
        
      </ClubDescription>
      </ClubContent>

    </ClubContainer>
  )
}

export default ClubeBk