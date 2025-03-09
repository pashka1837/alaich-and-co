import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { makeServer } from "../__mock/server";
import { createMemoryHistory } from "history";
import About from "../app/routes/About";
import Profile from "../app/routes/Profile";
import { Router } from "react-router";
import { renderWithProviders } from "../utils/test-utils";
import { authors, profiles, quoutes, users } from "../__mock/data";
import Signin from "../app/routes/Signin";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InBhc3N3b3JkIjoieHh4MTExMjIiLCJlbWFpbCI6InBhdmVsQGV4YW1wbGUuY29tIiwiaWQiOiIyIn19.bL8fCSWigTbZfzlcyNFm8T8i6NSNxpQzll15B0JUpes";

let server: any;
beforeEach(() => {
  server = makeServer();
  users.forEach((u, i) => {
    const user = server.create("user", u);
    server.create("profile", { ...profiles[i], user });
  });
  authors.forEach((a, i) => {
    const author = server.create("author", a);
    server.create("quote", { ...quoutes[i], author });
  });
});
afterEach(() => {
  server.shutdown();
});

test("About route test data", async () => {
  const { getByTestId } = render(About());
  const loaderEl = screen.getByTestId("loaderEl");
  expect(loaderEl).toBeInTheDocument();

  await waitFor(() => {
    const dataEl = getByTestId("data");
    expect(dataEl).toHaveTextContent("The story about company");
  });
});

test("/signin should redirect to / when auth", async () => {
  const history = createMemoryHistory({ initialEntries: ["/profile"] });
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

test("/profile Route should redirect when not auth", async () => {
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

test("Profile route when sign in", async () => {
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
