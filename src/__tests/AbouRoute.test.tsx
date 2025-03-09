import { screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { renderWithProviders } from "../utils/test-utils";
import About from "../app/routes/About";
import { token } from "./testsSetup";

test("/about route should render when auth", async () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });
  const { getByTestId } = renderWithProviders(
    <Router location={history.location} navigator={history}>
      <About />
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
    const dataAbout = getByTestId("dataAbout");
    expect(dataAbout).toHaveTextContent("The story about company");
  });
});

test("/about route should render when not auth", async () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });
  const { getByTestId } = renderWithProviders(
    <Router location={history.location} navigator={history}>
      <About />
    </Router>,
    {
      preloadedState: {
        auth: {
          token: null,
        },
      },
    }
  );
  const loaderComp = screen.getByTestId("loaderComp");
  expect(loaderComp).toBeInTheDocument();

  await waitFor(() => {
    const dataAbout = getByTestId("dataAbout");
    expect(dataAbout).toHaveTextContent("The story about company");
  });
});
