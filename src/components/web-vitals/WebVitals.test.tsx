import { render } from "@testing-library/react";
import { useReportWebVitals } from "next/web-vitals";

import WebVitals from "./WebVitals";

jest.mock("next/web-vitals", () => ({
  useReportWebVitals: jest.fn(),
}));

describe("WebVitals Component", () => {
  it("calls useReportWebVitals and logs metrics", () => {
    const consoleLogSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    const mockMetric = {
      label: "web-vital",
      name: "FCP",
      startTime: 100,
      value: 1234,
    };

    (useReportWebVitals as jest.Mock).mockImplementation((callback) => {
      callback(mockMetric);
    });
    render(<WebVitals />);

    expect(consoleLogSpy).toHaveBeenCalledWith(mockMetric);
    consoleLogSpy.mockRestore();
  });
});
