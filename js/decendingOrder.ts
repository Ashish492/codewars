export function descendingOrder(n: number): number {
  return +n
    .toString()
    .split("")
    .sort((a, b) => +b - +a)
    .join("")
}
