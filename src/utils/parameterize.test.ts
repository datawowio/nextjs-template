import parameterize from "./parameterize";

describe("parameterize", () => {
  it("converts spaces to dashes", () => {
    expect(parameterize("Convert this string to dashed")).toBe(
      "convert-this-string-to-dashed",
    );
  });

  it("handles special characters by removing them", () => {
    expect(parameterize("Special! Characters@ Here#")).toBe(
      "special-characters-here",
    );
  });

  it("converts the string to lowercase", () => {
    expect(parameterize("Mixed CASE String")).toBe("mixed-case-string");
  });

  it("handles empty strings", () => {
    expect(parameterize("")).toBe("");
  });

  it("handles strings with only spaces", () => {
    expect(parameterize("     ")).toBe("");
  });

  it("handles strings with numbers", () => {
    expect(parameterize("Parameterize 123")).toBe("parameterize-123");
  });

  it("trims leading and trailing spaces", () => {
    expect(parameterize("   Trim spaces here   ")).toBe("trim-spaces-here");
  });

  it("handles multiple spaces between words", () => {
    expect(parameterize("Multiple   spaces between words")).toBe(
      "multiple-spaces-between-words",
    );
  });
});
