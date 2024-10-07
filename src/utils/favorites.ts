import { SimplePokemon } from "@/hooks/useGetSimplePokemonData";

import { rootReducer } from "@/lib/store";


export const loadState = ()=> {
  try {
    const serializedState = localStorage.getItem('favorites');
    
    if (serializedState === null) {
      return undefined
    }
    const favorites: SimplePokemon[] = JSON.parse(serializedState)
   
    return favorites
  } catch (err) {
    return undefined
     
  }
};

export const saveState = (state: ReturnType<typeof rootReducer>) => {

  try {
    const serializedState = JSON.stringify(state.favorites);

    localStorage.setItem('favorites', serializedState);
  } catch {
    localStorage.removeItem('favorites');
  }
};