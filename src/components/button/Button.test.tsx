import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("renders the Button component with text", () => {
    render(<Button>Click Me</Button>);

    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("handles button click event", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const buttonElement = screen.getByText("Click Me");
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies custom props correctly", () => {
    render(
      <Button color="primary" size="large">
        Custom Button
      </Button>,
    );

    const buttonElement = screen.getByText("Custom Button");

    expect(buttonElement).toHaveClass("MuiButton-root");
    expect(buttonElement).toHaveClass("MuiButton-sizeLarge");
    expect(buttonElement).toHaveClass("MuiButton-colorPrimary");
    expect(buttonElement).toHaveClass("MuiButton-textPrimary");
  });

  it("renders with the disabled state", () => {
    render(<Button disabled>Disabled Button</Button>);

    const buttonElement = screen.getByText("Disabled Button");

    expect(buttonElement).toBeDisabled();
  });
});
