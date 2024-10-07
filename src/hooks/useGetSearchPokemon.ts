import { pokeApi } from "@/config/axios";
import { AllDetailsPokemon } from "@/types/pokeapiDetails";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useGetSearchPokemon = () => {
    const [namePokemon, setNamePokemon] = useState("");
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["pokeSearch",namePokemon],
    queryFn: async ({ queryKey }) => {
      const namePokemon = queryKey[1];
      if (!namePokemon) return null;

      const response = await pokeApi.get<AllDetailsPokemon>(`/pokemon/${namePokemon}`);
      return {
        id: response.data.id,
        name: response.data.name,
        image: response.data.sprites.other?.dream_world.front_default,
      };
    },
    enabled: !!namePokemon, 
  });

  const fetchPokemonByName = async (namePokemon:string) => {
    setNamePokemon(namePokemon);
    refetch(); 
  };

  return { data, error, isLoading, fetchPokemonByName };
};
