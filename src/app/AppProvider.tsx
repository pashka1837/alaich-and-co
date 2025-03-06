import { CssBaseline, CssVarsProvider } from "@mui/joy";

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <CssVarsProvider>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
