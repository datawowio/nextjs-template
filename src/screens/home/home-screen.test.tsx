import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useTranslations } from "next-intl";

import HomeScreen from "./home-screen";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn(),
}));

describe("HomeScreen Component", () => {
  beforeEach(() => {
    (useTranslations as jest.Mock).mockImplementation(() => (key: string) => {
      const translations: Record<string, string> = {
        logoAlt: "Logo",
        heading: "Welcome to Home Screen",
        description: "This is the home screen of the application.",
        cta: "Get Started",
      };
      return translations[key];
    });
  });

  it("renders without crashing", () => {
    const { container } = render(<HomeScreen />);

    const logoImage = screen.getByAltText("Logo");
    const heading = screen.getByRole("heading", { level: 3 });
    const description = screen.getByText(
      "This is the home screen of the application.",
    );
    const button = screen.getByRole("button", { name: "Get Started" });

    expect(logoImage).toBeInTheDocument();
    expect(heading).toHaveTextContent("Welcome to Home Screen");
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
