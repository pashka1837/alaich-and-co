import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "../feature/authSlice";

const rootReducer = combineReducers({
  auth: authSlice,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
