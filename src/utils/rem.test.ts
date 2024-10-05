import rem from "./rem";

describe("rem", () => {
  it("converts pixels to rem with the default base", () => {
    const result = rem(32);
    expect(result).toBe("2rem");
  });

  it("converts pixels to rem with a custom base", () => {
    const result = rem(32, 10);
    expect(result).toBe("3.2rem");
  });

  it("returns '0' when unitInPixel is 0", () => {
    const result = rem(0);
    expect(result).toBe("0");
  });

  it("handles negative pixel values", () => {
    const result = rem(-16);
    expect(result).toBe("-1rem");
  });

  it("handles fractional pixel values", () => {
    const result = rem(8.5);
    expect(result).toBe("0.53125rem");
  });
});
