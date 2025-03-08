import { AppRouter } from "./AppRouter";
import { AppProvider } from "./AppProvider";

export function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
