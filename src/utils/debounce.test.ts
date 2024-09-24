import debounce from "./debounce";

jest.useFakeTimers();

describe("debounce", () => {
  let mockFunc: jest.Mock;

  beforeEach(() => {
    mockFunc = jest.fn();
  });

  it("calls the function after the specified delay", () => {
    const debouncedFunc = debounce(mockFunc, 500);

    debouncedFunc("test");

    expect(mockFunc).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);

    expect(mockFunc).toHaveBeenCalledTimes(1);
    expect(mockFunc).toHaveBeenCalledWith("test");
  });

  it("resets the delay if called again before the timer expires", () => {
    const debouncedFunc = debounce(mockFunc, 500);

    debouncedFunc("first");

    jest.advanceTimersByTime(300);

    debouncedFunc("second");

    jest.advanceTimersByTime(500);

    expect(mockFunc).toHaveBeenCalledTimes(1);
    expect(mockFunc).toHaveBeenCalledWith("second");
  });

  it("does NOT call the function if it is cancelled", () => {
    const debouncedFunc = debounce(null, 500);

    debouncedFunc();

    jest.advanceTimersByTime(500);

    expect(mockFunc).not.toHaveBeenCalled();
  });
});
