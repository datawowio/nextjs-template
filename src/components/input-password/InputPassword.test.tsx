import { render, screen, fireEvent } from "@testing-library/react";
import { colors } from "@/config/palette";
import InputPassword from "./InputPassword";

describe("InputPassword Component", () => {
  it("renders the password input with the label", () => {
    render(<InputPassword label="Password" />);

    expect(screen.getByLabelText("Password")).toBeInTheDocument();

    const input = screen.getByLabelText("Password");
    expect(input).toHaveAttribute("type", "password");
  });

  it("toggles the password visibility on icon button click", () => {
    render(<InputPassword label="Password" />);

    const input = screen.getByLabelText("Password");
    const toggleButton = screen.getByRole("button", {
      name: /toggle password visibility/i,
    });

    expect(input).toHaveAttribute("type", "password");

    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "text");

    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "password");
  });

  it("changes the icon when password visibility is toggled", () => {
    render(<InputPassword label="Password" />);

    const toggleButton = screen.getByRole("button", {
      name: /toggle password visibility/i,
    });

    expect(screen.getByTestId("VisibilityIcon")).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getByTestId("VisibilityOffIcon")).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getByTestId("VisibilityIcon")).toBeInTheDocument();
  });

  it("disables the toggle button when the disabled prop is passed", () => {
    render(<InputPassword label="Password" disabled />);

    const input = screen.getByLabelText("Password");
    expect(input).toBeDisabled();

    const toggleButton = screen.getByLabelText("toggle password visibility", {
      selector: "button",
    });
    expect(toggleButton.children[0]).toHaveStyle({
      color: colors.icon.disabled.base,
    });
  });
});
