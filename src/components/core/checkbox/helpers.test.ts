import { getCustomTextVariant, customTypographyStyle } from "./helpers";
import type { CheckboxCustomSize } from "./types";

describe("getCustomTextVariant", () => {
  it('returns the correct typography style for "small"', () => {
    const result = getCustomTextVariant("small");
    expect(result).toBe(customTypographyStyle["small"]);
  });

  it('returns the correct typography style for "medium"', () => {
    const result = getCustomTextVariant("medium");
    expect(result).toBe(customTypographyStyle["medium"]);
  });

  it('returns the correct typography style for "large"', () => {
    const result = getCustomTextVariant("large");
    expect(result).toBe(customTypographyStyle["large"]);
  });

  it("handles unexpected size inputs gracefully", () => {
    const size = "extra-large" as CheckboxCustomSize;
    expect(() => getCustomTextVariant(size)).toThrow(
      `unknown custom text variant size: ${size}`,
    );
  });
});
