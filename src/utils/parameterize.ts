export default function parameterize(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // Remove special characters
    .trim() // Trim leading/trailing spaces
    .replace(/\s+/g, "-"); // Replace spaces with dashes
}
