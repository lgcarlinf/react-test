import { pokeApi } from "@/config/axios";
import { useQuery } from "@tanstack/react-query";
import { AllDetailsPokemon } from '../types/pokeapiDetails';
import { PokeAbilities } from "@/types/pokeapiAbilities";
import { PokeInfo } from "@/types/pokeapiDetailTransform";

const fetchPokemonDetails = async (id: string): Promise<PokeInfo> => {
    const response = await pokeApi.get<AllDetailsPokemon>('pokemon/' + id);
    const pokemonData = {
        id: response.data.id,
        name: response.data.name,
        image: response.data.sprites.other?.dream_world.front_default,
        abilities: response.data.abilities,
        types: response.data.types.map((type) => type.type.name),
        size: response.data.height,
    };

    const abilityPromises = pokemonData.abilities.map(async (ability) => {
        const abilityResponse = await pokeApi.get<PokeAbilities>(ability.ability.url);
        return {
            name: ability.ability.name,
            effect: abilityResponse.data.effect_entries.find(e => e.language.name === "es")?.effect || "No description available",
        };
    });

    const genderResponse = await pokeApi.get(`/pokemon-species/${pokemonData.id}`);
    const genderRate = genderResponse.data.gender_rate;

    const abilityDetails = await Promise.all(abilityPromises);

    return {
        name: pokemonData.name,
        abilities: abilityDetails.map((ability) => ability.name),
        gender: genderRate === -1 ? "Sin Genero" : "Masculino o Femenino",
        types: pokemonData.types,
        size: pokemonData.size,
        image: pokemonData.image,
    };
};

const useGetPokemonDetails = (url: string) => {
    return useQuery<PokeInfo>({
        queryKey: ['pokemonDetails', url],
        queryFn: () => fetchPokemonDetails(url),
        enabled: !!url,
    });
};

export default useGetPokemonDetails;
