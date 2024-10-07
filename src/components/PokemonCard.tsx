import React, { useCallback } from 'react';
import { FavoriteSVG } from "./icons/favorite.icon";
import { SimplePokemon } from "@/hooks/useGetSimplePokemonData";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleFavorite } from "@/lib/favoriteSlice";
import { Link } from '@tanstack/react-router';

interface PokemonCardProps {
    pokemon: SimplePokemon;
}

export const PokemonCard = React.memo(({ pokemon }: PokemonCardProps) => {

    const dispatch = useAppDispatch();
    const favorites = useAppSelector((state) => state.favorites);
    const isFavorite = favorites && Array.isArray(favorites) 
        ? favorites.some((fav) => fav.id === pokemon.id)
        : false;

    const pokemonFavorite: SimplePokemon = {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.image,
        favorite: !pokemon.favorite
    }

    const handleToggleFavorite = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        dispatch(toggleFavorite(pokemonFavorite));
    }, [dispatch, pokemonFavorite]);

    return (
       <Link to={`/pokemon/${pokemon.id}`}>
             <div className="w-full min-w-[180px] sm:w-2/5 md:w-[200px] lg:w-1/5 bg-white rounded-md shadow-md flex flex-wrap flex-col items-center justify-between">
            <div className='p-4'>
                <img
                    src={pokemon.image ?? ""}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                    className='w-[100px] h-[100px]'
                />
            </div>
            <div className='w-full bg-[#EDEFF2] flex justify-between items-center px-6 py-3'>
                <h1 className="text-lg font-bold text-[#333] text-[16px]">{pokemon.name}</h1>
                <div onClick={handleToggleFavorite}>
                <FavoriteSVG
                    className={`cursor-pointer ${isFavorite ? 'fill-red-500 stroke-none' : 'text-gray-500'}`}
                />
                </div>
            </div>
        </div>
       </Link>
    );
});