export default function rem(unitInPixel: number, base = 16.0) {
  if (unitInPixel === 0) return "0";
  return `${unitInPixel / base}rem`;
}
