import { PokemonDetail } from '@/pages/PokemonDetail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pokemon/$pokemonId')({

  component: () => {
   const {pokemonId} =  Route.useParams()
  return <PokemonDetail pokemonId={pokemonId}/>}
})
