import { DotSVG } from "@/components/icons/dot.icon";
import { FavoriteSVG } from "@/components/icons/favorite.icon";
import { SkeletonDetail } from "@/components/SkeletonDetail";
import useGetPokemonDetails from "@/hooks/useGetPokemonDetails";
import { SimplePokemon } from "@/hooks/useGetSimplePokemonData";
import { toggleFavorite } from "@/lib/favoriteSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { upperCaseFirstLetter } from "@/utils";
import { useCallback } from "react";

interface PokemonDetailProps {
    pokemonId: string;
}

export const PokemonDetail = ({pokemonId}:PokemonDetailProps) => {
     const {data,isFetching} = useGetPokemonDetails(pokemonId)
     const dispatch = useAppDispatch();

     const favorites = useAppSelector((state) => state.favorites);
     const isFavorite = favorites && Array.isArray(favorites) 
     ? favorites.some((fav) => fav.id === pokemonId)
     : false;

     const pokemonFavorite: SimplePokemon = {
        id: pokemonId,
        name: data?.name ?? "",
        image: data?.image,
        favorite: !isFavorite
    }

     const handleToggleFavorite = useCallback(() => {
        dispatch(toggleFavorite(pokemonFavorite));
    }, [dispatch, pokemonFavorite]);

    if(isFetching) return <SkeletonDetail/>

  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-6 px-4 md:px-36">
        <div>
            <div className="flex gap-3 items-center">
            <p>Home</p>
            <DotSVG/>
            <span className="text-[#919EAB]">{data?.name}</span>
            </div>
            <div className="w-full lg:w-[512px] h-[300px] lg:h-[512px] bg-white rounded-md shadow-md sm:shadow-none sm:rounded-none flex flex-wrap flex-col items-center mx-auto">
                <img src={data?.image} alt={data?.name} className="w-full h-full p-6" loading="lazy"/>
            </div>
        </div>
        <div className="flex flex-col gap-4 pb-6 lg:justify-center lg:w-1/3">
           <div className="flex justify-between">
                <h1 className="text-xl font-semibold">{upperCaseFirstLetter(data?.name)}</h1>
                <FavoriteSVG
                    className={`cursor-pointer ${isFavorite ? 'fill-red-500 stroke-none' : 'text-gray-500'}`}
                    onClick={handleToggleFavorite}
                />
           </div>
            <div>
                <p className="font-semibold">Habilidades</p>
                <ul>
                    {Array.isArray(data?.abilities) && data?.abilities.map((ability) => (
                        <li className="text-[#637381]" key={ability}>{ability}</li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-between gap-12">
            <p>Género</p>
            <p>{data?.gender}</p>
            </div>
            <div className="flex justify-between">
                <p>Tamaño</p>
                <p>{data?.size}</p>
            </div>
            <div className="flex justify-between">
                <p>Tipo</p>
                <div className="flex gap-4">
                    {Array.isArray(data?.types) && data?.types.map((type) => (
                        <p key={type}>{type}</p>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
