import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { Provider } from "react-redux";
import { store } from "../store/reduxStore";

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Provider store={store}>{children}</Provider>
    </CssVarsProvider>
  );
}
