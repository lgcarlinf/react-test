  import { configureStore, combineReducers } from '@reduxjs/toolkit'
  import favoriteReducer from './favoriteSlice';
import { loadState, saveState } from '@/utils/favorites';

  export const rootReducer = combineReducers({
    favorites: favoriteReducer,
  });

  export const favoriteStore = () => {
    const store = configureStore({
      reducer: rootReducer,
      preloadedState:{
        favorites: loadState()
      }
    });

    store.subscribe(() => {
      saveState(store.getState());
    });

    return store
  }

  export type AppStore = ReturnType<typeof favoriteStore>
  export type RootState = ReturnType<AppStore['getState']>
  export type AppDispatch = AppStore['dispatch']