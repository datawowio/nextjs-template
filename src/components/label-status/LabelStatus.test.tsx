import { render, screen } from "@testing-library/react";
import LabelStatus from "./LabelStatus";
import { customStatusStyle } from "./styles";

describe("LabelStatus Component", () => {
  it("renders with default status 'ready' when no props are provided", () => {
    render(<LabelStatus />);

    // Check that the text defaults to 'ready'
    expect(screen.getByText(/ready/i)).toBeInTheDocument();

    // Check that the background color matches the 'ready' status
    const boxElement = screen.getByTestId("box");
    expect(boxElement).toHaveStyle(
      `background-color: ${customStatusStyle.ready.color}`,
    );
  });

  it("renders the correct text when provided", () => {
    render(<LabelStatus text="Custom Text" status="running" />);

    // Check that the custom text is rendered
    expect(screen.getByText(/custom text/i)).toBeInTheDocument();
  });

  it("renders the correct status styles based on the 'status' prop", () => {
    render(<LabelStatus status="completed" />);

    // Check that the text defaults to the 'completed' status
    expect(screen.getByText(/completed/i)).toBeInTheDocument();

    // Check that the background color matches the 'completed' status
    const boxElement = screen.getByTestId("box");
    expect(boxElement).toHaveStyle(
      `background-color: ${customStatusStyle.completed.color}`,
    );
  });

  it("applies uppercase style to the Typography", () => {
    render(<LabelStatus status="failed" />);

    const typographyElement = screen.getByText(/failed/i);

    // Check if the text-transform is uppercase
    expect(typographyElement).toHaveStyle(`text-transform: uppercase`);
  });
});
