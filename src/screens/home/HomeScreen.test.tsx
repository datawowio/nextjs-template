import { render, screen } from "@testing-library/react";
import HomeScreen from "./HomeScreen";

describe("HomeScreen", () => {
  it("renders the main heading", () => {
    render(<HomeScreen />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Welcome to the Next.js template!",
    );
  });

  it("renders the body content", () => {
    render(<HomeScreen />);

    expect(
      screen.getByText(/kickstart your Next.js journey/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/high-performance web experiences effortlessly/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/foundation for success/i)).toBeInTheDocument();
  });
});
