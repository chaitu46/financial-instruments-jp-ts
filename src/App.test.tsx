import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders default app", async () => {
    render(<App />);
    const pageHeading = screen.getByRole("heading");
    expect(pageHeading).toHaveTextContent("Loading...");
  });
});