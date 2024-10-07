import { SimplePokemon } from '@/hooks/useGetSimplePokemonData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SimplePokemon[] = [];

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
            const pokemonIndex = state.findIndex(
                (pokemon) => pokemon.id === action.payload.id
            );

            if (pokemonIndex >= 0) {
                state.splice(pokemonIndex, 1);
            } else {
                state.push(action.payload);
            }
        },
    },
});

export const {  toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;