import { createMemoryHistory } from "history";
import { renderWithProviders } from "../utils/test-utils";
import { Router } from "react-router";
import Signin from "../app/routes/Signin";
import { token } from "./testsSetup";

test("/signin should redirect to / when auth", async () => {
  const history = createMemoryHistory({ initialEntries: ["/signin"] });
  renderWithProviders(
    <Router location={history.location} navigator={history}>
      <Signin />
    </Router>,
    {
      preloadedState: {
        auth: {
          token,
        },
      },
    }
  );
  expect(history.location.pathname).toBe("/");
});

test("/signin should NOT redirect to / when NOT auth", async () => {
  const history = createMemoryHistory({ initialEntries: ["/signin"] });
  renderWithProviders(
    <Router location={history.location} navigator={history}>
      <Signin />
    </Router>,
    {
      preloadedState: {
        auth: {
          token: null,
        },
      },
    }
  );
  expect(history.location.pathname).toBe("/signin");
});
