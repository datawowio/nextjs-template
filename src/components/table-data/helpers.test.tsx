import { render, screen } from "@testing-library/react";
import { getIconComponent } from "./helpers";

jest.mock("@/components/icons", () => ({
  IconArrowUp: jest.fn(() => <svg data-testid="arrow-up" />),
  IconArrowDown: jest.fn(() => <svg data-testid="arrow-down" />),
}));

describe("getIconComponent", () => {
  it("renders IconArrowDown when sortColumn is active and orderBy is asc", () => {
    const icon = getIconComponent("name", "name", "asc");
    render(icon);

    expect(screen.getByTestId("arrow-down")).toBeInTheDocument();
    expect(screen.queryByTestId("arrow-up")).not.toBeInTheDocument();
  });

  it("renders IconArrowUp when sortColumn is active and orderBy is desc", () => {
    const icon = getIconComponent("name", "name", "desc");
    render(icon);

    expect(screen.getByTestId("arrow-up")).toBeInTheDocument();
    expect(screen.queryByTestId("arrow-down")).not.toBeInTheDocument();
  });

  it("renders both IconArrowUp and IconArrowDown when sortColumn is not active", () => {
    const icon = getIconComponent("name", "age", "asc");
    render(icon);

    expect(screen.getByTestId("arrow-up")).toBeInTheDocument();
    expect(screen.getByTestId("arrow-down")).toBeInTheDocument();
  });
});
