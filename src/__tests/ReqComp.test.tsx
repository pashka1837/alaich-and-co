import userEvent from "@testing-library/user-event";

import { createMemoryHistory } from "history";
import { renderWithProviders } from "../utils/test-utils";
import { Router } from "react-router";
import { token } from "./testsSetup";
import Profile from "../app/routes/Profile";
import { waitFor } from "@testing-library/react";

jest.setTimeout(15000);

test("Quote info data should render when UpdateBtn clicked", async () => {
  const history = createMemoryHistory({ initialEntries: ["/profile"] });
  const { getByTestId, queryByTestId } = renderWithProviders(
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

  const user = userEvent.setup();

  const loaderComp = getByTestId("loaderComp");
  expect(loaderComp).toBeInTheDocument();

  const updateBtn = await waitFor(() => {
    const updateBtn = getByTestId("updateBtn");
    expect(updateBtn).toBeInTheDocument();
    return updateBtn;
  });

  await user.click(updateBtn);

  await waitFor(
    () => {
      expect(queryByTestId("quoteInfo")).not.toBeNull();
    },
    { timeout: 10500 }
  );
});

test("Quote req should cancel when CancelBtn clicked", async () => {
  const history = createMemoryHistory({ initialEntries: ["/profile"] });
  const { getByTestId, queryByTestId } = renderWithProviders(
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

  const user = userEvent.setup();

  const loaderComp = getByTestId("loaderComp");
  expect(loaderComp).toBeInTheDocument();

  const updateBtn = await waitFor(() => {
    const updateBtn = getByTestId("updateBtn");
    expect(updateBtn).toBeInTheDocument();
    return updateBtn;
  });

  await user.click(updateBtn);

  const cancelBtn = await waitFor(
    () => {
      const cancelBtn = getByTestId("cancelBtn");
      expect(cancelBtn).toBeInTheDocument();
      return cancelBtn;
    },
    { timeout: 3000 }
  );

  await user.click(cancelBtn);

  expect(queryByTestId("quoteInfo")).toBeNull();
});
