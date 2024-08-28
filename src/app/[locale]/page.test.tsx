import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useTranslations } from "next-intl";

import Page from "./page";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn(),
}));

describe("route: /", () => {
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

  it("renders a heading", () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
});
