import { configureStore } from '@reduxjs/toolkit';
import filterReducer from "../features/filters/filterSlice";
import exerciseReducer from "../features/exercise/exerciseSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {filter:filterReducer, exercise:exerciseReducer, user:userReducer},
})