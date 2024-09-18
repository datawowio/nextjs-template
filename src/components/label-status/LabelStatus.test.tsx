import { render, screen } from "@testing-library/react";

import { colors } from "@/config/palette";

import LabelStatus from "./LabelStatus";

describe("LabelStatus Component", () => {
  it("renders with default status `ready` when no props are provided", () => {
    render(<LabelStatus />);

    const labelStatus = screen.getByText(/ready/i);

    expect(labelStatus).toBeInTheDocument();
    expect(labelStatus.parentElement).toHaveStyle({
      backgroundColor: colors.icon.default.gray,
    });
    expect(labelStatus).toHaveStyle({
      color: colors.icon.default.gray,
    });
  });

  it("renders the correct text when provided", () => {
    render(<LabelStatus text="Custom Text" />);
    expect(screen.getByText(/custom text/i)).toBeInTheDocument();
  });

  it("renders the correct status styles based on the `status` prop", () => {
    render(<LabelStatus status="completed" />);

    const labelStatus = screen.getByText(/completed/i);

    expect(labelStatus).toBeInTheDocument();
    expect(labelStatus.parentElement).toHaveStyle({
      backgroundColor: colors.other.primary.darkBlue,
    });
    expect(labelStatus).toHaveStyle({
      color: colors.other.primary.darkBlue,
    });
  });

  it("applies uppercase style to the Typography", () => {
    render(<LabelStatus status="failed" />);

    const labelStatus = screen.getByText(/failed/i);
    expect(labelStatus).toHaveStyle({
      textTransform: "uppercase",
    });
  });
});
