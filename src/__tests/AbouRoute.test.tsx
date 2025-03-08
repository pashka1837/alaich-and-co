import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { makeServer } from "../__mock/server";
// import { App } from "../app";
import About from "../app/routes/About";
let server: any;
beforeEach(() => {
  server = makeServer();
});
afterEach(() => {
  server.shutdown();
});
test("About route test data", async () => {
  const { getByTestId } = render(About());
  const loaderEl = screen.getByTestId("loader");
  expect(loaderEl).toBeInTheDocument();

  await waitFor(() => {
    const dataEl = getByTestId("data");
    expect(dataEl).toHaveTextContent("The story about company");
  });
});
