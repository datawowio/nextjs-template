import { act, fireEvent, render, screen } from "@testing-library/react";

import { useToast } from "@/hooks/use-toast";
import ToastProvider from "./ToastProvider";

describe("ToastProvider Component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("shows the toast with the correct message and status", () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>,
    );

    expect(screen.queryByRole("presentation")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Show Toast"));
    const toast = screen.getByRole("presentation");

    expect(toast).toBeInTheDocument();
    expect(screen.getByText("Test message")).toBeInTheDocument();
    expect(toast.firstChild).toHaveClass("MuiAlert-standardSuccess");
  });

  it("hides the toast when hideToast is called", () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByText("Show Toast"));

    const toast = screen.getByRole("presentation");
    expect(toast).toBeInTheDocument();

    fireEvent.click(screen.getByText("Hide Toast"));

    act(() => {
      jest.advanceTimersByTime(200);
    });

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.queryByRole("presentation")).not.toBeInTheDocument();
  });

  it("auto-hides the toast after the specified duration", () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByText("Show Toast"));
    expect(screen.getByRole("presentation")).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.queryByRole("presentation")).not.toBeInTheDocument();
  });

  it("closes the toast when onClose is triggered", () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByText("Show Toast"));

    const toast = screen.getByRole("presentation");
    expect(toast).toBeInTheDocument();

    fireEvent.click(toast.querySelector("button")!);

    act(() => {
      jest.advanceTimersByTime(200);
    });

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.queryByRole("presentation")).not.toBeInTheDocument();
  });

  it("does NOT close the toast when reason is `clickaway`", () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByText("Show Toast"));
    expect(screen.getByRole("presentation")).toBeInTheDocument();

    fireEvent.click(document.body);
    expect(screen.queryByRole("presentation")).toBeInTheDocument();
  });
});

/*
 * Test helper
 */

function TestComponent() {
  // Hook
  const context = useToast();

  // Event handlers
  function handleClickShowToast() {
    context.showToast("Test message", "success", 3000);
  }

  function handleClickHideToast() {
    context.hideToast();
  }

  return (
    <div>
      <button onClick={handleClickShowToast}>Show Toast</button>
      <button onClick={handleClickHideToast}>Hide Toast</button>
    </div>
  );
}
