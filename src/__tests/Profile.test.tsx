import { createMemoryHistory } from "history";
import { renderWithProviders } from "../utils/test-utils";
import { Router } from "react-router";
import { token } from "./testsSetup";
import Profile from "../app/routes/Profile";
import { waitFor } from "@testing-library/react";

test("/profile route should redirect when not auth", async () => {
  const history = createMemoryHistory({ initialEntries: ["/profile"] });
  renderWithProviders(
    <Router location={history.location} navigator={history}>
      <Profile />
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

test("/profile route should NOT redirect when auth", async () => {
  const history = createMemoryHistory({ initialEntries: ["/profile"] });
  const { getByTestId } = renderWithProviders(
    <Router location={history.location} navigator={history}>
      <Profile />
    </Router>,
    {
      preloadedState: {
        auth: {
          token,
        },
      },
    }
  );
  expect(history.location.pathname).toBe("/profile");

  await waitFor(() => {
    const profileInfo = getByTestId("profileInfo");
    expect(profileInfo).toBeInTheDocument();
  });
});

test("/profile route should render profile info data when auth", async () => {
  const history = createMemoryHistory({ initialEntries: ["/profile"] });
  const { getByTestId } = renderWithProviders(
    <Router location={history.location} navigator={history}>
      <Profile />
    </Router>,
    {
      preloadedState: {
        auth: {
          token,
        },
      },
    }
  );

  const loaderComp = getByTestId("loaderComp");
  expect(loaderComp).toBeInTheDocument();

  await waitFor(() => {
    const profileInfo = getByTestId("profileInfo");
    expect(profileInfo).toBeInTheDocument();
  });
});
