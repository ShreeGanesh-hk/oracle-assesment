import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from './features/loading';
import loginReducer from './features/login';
import appReducer from './features/app';



export const store = configureStore({
    reducer: {
        loadingIndicator: loadingReducer,
        login: loginReducer,
        app:appReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
