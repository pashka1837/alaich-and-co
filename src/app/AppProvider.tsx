import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { Provider } from "react-redux";
import { persistor, store } from "../store/reduxStore";
import { PersistGate } from "redux-persist/integration/react";

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </CssVarsProvider>
  );
}
