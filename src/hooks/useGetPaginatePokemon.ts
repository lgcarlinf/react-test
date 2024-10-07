import { pokeApi } from "@/config/axios";
import { AllPokemon } from "@/types/pokeapi";
import { useQuery } from "@tanstack/react-query";

export const useGetPaginatePokemon = (limit: number, offset: number) => {
  return useQuery<AllPokemon>({
    queryKey: ["pokeAll", limit, offset],
    queryFn: async () => {
      const response = await pokeApi.get<AllPokemon>("/pokemon", {
        params: {
          limit,
          offset,
        },
      });
      return response.data;
    },
  });

};
