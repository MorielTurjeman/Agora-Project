import { configureStore } from '@reduxjs/toolkit';
import agoraItemsReducer from './features/storeSlice';

export const store = configureStore({
    reducer: {
        agora: agoraItemsReducer,
    },
});