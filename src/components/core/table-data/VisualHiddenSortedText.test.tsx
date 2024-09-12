import { render, screen } from "@testing-library/react";
import VisualHiddenSortedText from "./VisualHiddenSortedText";

describe("VisualHiddenSortedText Component", () => {
  it("renders the text when isShow is true", () => {
    render(<VisualHiddenSortedText isShow={true} text="Sorted Ascending" />);

    const element = screen.getByText("Sorted Ascending");
    expect(element).toBeInTheDocument();
  });

  it("applies visually hidden styles when isShow is true", () => {
    render(<VisualHiddenSortedText isShow={true} text="Hidden Text" />);

    const element = screen.getByText("Hidden Text");

    expect(element).toHaveStyle("position: absolute");
    expect(element).toHaveStyle("width: 1px");
    expect(element).toHaveStyle("height: 1px");
  });

  it("does NOT render the text when isShow is false", () => {
    render(<VisualHiddenSortedText isShow={false} text="Should be hidden" />);

    const element = screen.queryByText("Should be hidden");
    expect(element).not.toBeInTheDocument();
  });
});
