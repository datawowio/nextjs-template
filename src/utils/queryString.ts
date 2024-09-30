export default function queryString(
  params: Record<string, string | number | undefined>,
) {
  const filteredParams = Object.fromEntries(
    Object.entries(params)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => [key, String(value)]),
  );
  const queryString = new URLSearchParams(filteredParams).toString();
  return queryString;
}
