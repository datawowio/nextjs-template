let timeoutId: NodeJS.Timeout;
export default function debounce<T>(
  func: ((...args: T[]) => void) | null | undefined,
  delay: number,
) {
  return (...args: T[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func?.(...args);
    }, delay);
  };
}
