import { render, screen } from "@testing-library/react";
import { getMessages } from "next-intl/server";

import LocaleProvider from "./LocaleProvider";

jest.mock("next-intl/server", () => ({
  getMessages: jest.fn(),
}));

const mockMessages = {
  messages: {
    greeting: "Hello",
  },
};

describe("LocaleProvider", () => {
  beforeEach(() => {
    (getMessages as jest.Mock).mockResolvedValue(mockMessages);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  context("when messages are fetched successfully", () => {
    it("renders the children inside NextIntlClientProvider with the fetched messages", async () => {
      const mockChildren = <div data-testid="child">Test Child</div>;
      const LocaleProviderElement = await LocaleProvider({
        children: mockChildren,
        locale: "en",
      });

      render(LocaleProviderElement);

      expect(await screen.findByTestId("child")).toBeInTheDocument();
      expect(getMessages).toHaveBeenCalledTimes(1);
    });
  });

  context("when getMessages fails", () => {
    beforeEach(() => {
      (getMessages as jest.Mock).mockRejectedValue(
        new Error("Failed to fetch messages"),
      );
    });

    it("throws an error when messages cannot be fetched", async () => {
      const mockChildren = <div data-testid="child">Test Child</div>;
      const LocaleProviderPromise = LocaleProvider({
        children: mockChildren,
        locale: "en",
      });

      await expect(LocaleProviderPromise).rejects.toThrow(
        "Failed to fetch messages",
      );
    });
  });
});
