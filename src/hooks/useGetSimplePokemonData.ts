import { pokeApi } from '@/config/axios';
import { AllDetailsPokemon } from '@/types/pokeapiDetails';
import { useQuery } from '@tanstack/react-query';

export interface SimplePokemon {
    id: string;
    name: string;
    image: string | undefined;
    favorite: boolean
}

export const useGetSimplePokemonData = (ids: string[]) => {
    return useQuery<SimplePokemon[]>({
        queryKey: ['simplePokemon', ids],
        queryFn: async () => {
            const promises = ids.map(async (id) => {
                const response = await pokeApi.get<AllDetailsPokemon>(`/pokemon/${id}`);
                return {
                    id,
                    name: response.data.name,
                    image: response.data.sprites.other?.dream_world.front_default,
                    favorite: false
                };
            });
            return Promise.all(promises);
        },
        enabled: !!ids,
    });
};
