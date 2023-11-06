export function rgb(r: number, g: number, b: number): string {
  const convertToHex = (n: number) =>
    filterValue(n).toString(16).padStart(2, "0")
  function filterValue(n: number) {
    if (n < 0) return 0
    if (n > 255) return 255
    return n
  }

  return `${convertToHex(r)}${convertToHex(g)}${convertToHex(b)}`
}
console.log(rgb(255, 255, 255))
