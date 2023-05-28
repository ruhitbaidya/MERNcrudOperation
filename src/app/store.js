import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from '../fetcher/userData/userSlice';

export const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware : (gfm)=>gfm().concat(apiSlice.middleware) 
})

setupListeners(store.dispatch)