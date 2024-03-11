import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../slices/loginSlice';


export const store = configureStore({
    reducer: {
    auth: loginReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
