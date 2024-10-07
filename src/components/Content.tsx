import { PokemonCard } from './PokemonCard';
import { SearchInput } from './SearchInput';
import { Skeleton } from './Skeleton';
import { LIMIT } from '../constants';
import { getFromLocalStorage, saveToLocalStorage } from '@/utils';
import { SimplePokemon, useGetSimplePokemonData } from '@/hooks/useGetSimplePokemonData';
import { useGetPaginatePokemon } from '@/hooks/useGetPaginatePokemon';
import Pagination from './Pagination';
import { useState } from 'react';
import { useGetSearchPokemon } from '@/hooks/useGetSearchPokemon';
import { useAppSelector } from '@/lib/hooks';

export const Content = () => {
  const [page, setPage] = useState(1);
  const offset = (page - 1) * LIMIT;
  
  const { data: paginatedData, isFetching: isFetchPaginate } = useGetPaginatePokemon(LIMIT, offset);
  const totalPages = Math.ceil((paginatedData?.count ?? 0) / LIMIT);
  
  const pokemonIds = paginatedData?.results.map(pokemon => pokemon.url.split('/')[6]) ?? [];
  const { data: pokemonSimpleData, isFetching: isFetchSimpleData } = useGetSimplePokemonData(pokemonIds);

  const {data:searchData,fetchPokemonByName} = useGetSearchPokemon();

  const favorites = useAppSelector((state) => state.favorites);
  const isFavoriteSearch = favorites.find((pokemon) => pokemon.name === searchData?.name);
  const searchPokemon: SimplePokemon = {
    id: searchData?.id?.toString() ?? '',
    name: searchData?.name ?? '',
    favorite: !!isFavoriteSearch,
    image: searchData?.image ?? '', 
  }

  const handlePageChange = (newPage: number) => setPage(newPage);

  const handleSubmit = (name:string) => {
    fetchPokemonByName(name);
  }
  if (totalPages) saveToLocalStorage('totalPages', totalPages);

  if (isFetchPaginate || isFetchSimpleData) return <Skeleton />;


  return (
    <div className='flex flex-col gap-6 px-4 md:px-36'>
      <div className="flex flex-col gap-10 aspect-auto">
        <SearchInput handleSubmit={handleSubmit}/>
        {searchData ? <PokemonCard pokemon={searchPokemon} />
        : <div className="w-full flex flex-wrap justify-evenly gap-12 md:gap-4 mt-4">
          {pokemonSimpleData?.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>}
      </div>
      <Pagination
        totalPages={totalPages || getFromLocalStorage('totalPages') || 1}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};