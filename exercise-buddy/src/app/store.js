import { configureStore } from '@reduxjs/toolkit';
import filterReducer from "../features/filters/filterSlice";
import exerciseReducer from "../features/exercise/exerciseSlice";

export const store = configureStore({
  reducer: {filter:filterReducer, exercise:exerciseReducer},
})