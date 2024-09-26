import { getCustomVariantProps } from "./helpers";
import type { CustomVariant } from "./types";

jest.mock("./styles", () => ({
  customVariantStyle: {
    regularParagraphLG: {
      fontSize: "1rem",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "1.5rem",
    },
    boldDisplayLG: {
      fontSize: "2.5rem",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "3.75rem",
      letterSpacing: "-0.4px",
    },
  },
}));

describe("getCustomVariantProps", () => {
  it("throws an error for unknown custom variants", () => {
    expect(() =>
      getCustomVariantProps("unknownVariant" as CustomVariant),
    ).toThrow("unknown custom variant type");
  });

  it("returns 'p' component and correct sx for paragraph variants", () => {
    const result = getCustomVariantProps("regularParagraphLG");

    expect(result).toEqual({
      component: "p",
      sx: {
        fontSize: "1rem",
        fontWeight: 400,
        fontStyle: "normal",
        lineHeight: "1.5rem",
      },
    });
  });

  it("returns 'span' component and correct sx for non-paragraph variants", () => {
    const result = getCustomVariantProps("boldDisplayLG");

    expect(result).toEqual({
      component: "span",
      sx: {
        fontSize: "2.5rem",
        fontWeight: 700,
        fontStyle: "normal",
        lineHeight: "3.75rem",
        letterSpacing: "-0.4px",
      },
    });
  });
});
