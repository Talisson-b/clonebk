import { Button, DescriptionNearby, FormNearbyRestaurant, Icon, NeabyRestaurantsInput, NearbyContainer } from "./styles"


const NearbyRestaurants = () => {
  return (
    <NearbyContainer>
      <h2>Restaurantes próximos a você</h2>
      <h4>Buscar por endereço</h4>
      <FormNearbyRestaurant>
        <NeabyRestaurantsInput type="text" placeholder="Digite aqui" />
        <Icon />
      </FormNearbyRestaurant>
      <span>ou</span>
      <h4>Encontre o BK mais próximo de você</h4>
      <DescriptionNearby>Preencha seu endereço no campo acima ou busque por restaurantes próximos a você (lembre-se de ativar sua localização no navegadoir caso esteja desativado).</DescriptionNearby>
      <Button>Buscar restaurantes próximos </Button>
      
    </NearbyContainer>
  )
}

export default NearbyRestaurants