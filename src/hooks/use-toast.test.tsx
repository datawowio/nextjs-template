import { renderHook } from "@testing-library/react";

import { ToastContext } from "@/contexts/toast";
import { useToast } from "./use-toast";

import type { ReactNode } from "react";

const mockContextValue = {
  showToast: jest.fn(),
  hideToast: jest.fn(),
};

describe("useToast Hook", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    // @ts-ignore
    console.error.mockClear();
  });

  it("returns the context when inside ToastProvider", () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <ToastContext.Provider value={mockContextValue}>
        {children}
      </ToastContext.Provider>
    );

    const { result } = renderHook(() => useToast(), { wrapper });

    expect(result.current).toBe(mockContextValue);
  });

  it("throws an error if not used within ToastProvider", () => {
    expect(() => {
      renderHook(() => useToast());
    }).toThrow("useToast must be used within a ToastProvider");
  });
});
