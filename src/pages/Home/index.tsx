import CarrosselSecundario from "../../components/CarroselSecundario"
import Carrossel from "../../components/CarrosselPrincipal"
import ClubeBk from "../../components/ClubeBK"
import NearbyRestaurants from "../../components/NearbyRestaurants"


const Home = () => {
  return (
    <>
      <Carrossel />
      <NearbyRestaurants />
      <CarrosselSecundario />
      <ClubeBk />
    </>
    
  )
}

export default Home