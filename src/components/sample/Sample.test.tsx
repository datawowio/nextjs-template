import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/test-helpers";
import Sample from "./Sample";

describe("Sample component", () => {
  it("renders the correct translation", () => {
    renderWithProviders(<Sample />);
    expect(screen.getByText("OK")).toBeInTheDocument();
  });
});
