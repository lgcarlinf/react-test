import { PokemonCard } from "@/components/PokemonCard";
import { SearchInput } from "@/components/SearchInput";
import { SimplePokemon } from "@/hooks/useGetSimplePokemonData";
import { useAppSelector } from "@/lib/hooks";
import { useState } from "react";

export default function Favorites() {
  const [pokemonSearched, setPokemonSearched] = useState<SimplePokemon>();
  const favorites = useAppSelector((state) => state.favorites);

  const handleSubmit = (search: string) => {
    const pokemon = favorites.find((pokemon) => pokemon.name === search);
    setPokemonSearched(pokemon);
  };

  if (favorites.length === 0) {
    return <h1>No hay pokemones favoritos</h1>;
  }

  return (
    <div className="flex flex-col gap-6 px-4 md:px-36">
      <SearchInput handleSubmit={handleSubmit} />
      <div className="w-full flex flex-wrap justify-evenly gap-12 md:gap-6 pb-6">
        {pokemonSearched ? (
          <PokemonCard pokemon={pokemonSearched} />
        ) : (
          favorites.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))
        )}
      </div>
    </div>
  );
}
