export function findNb(m: number): number {
  const result = (Math.sqrt(Math.sqrt(m) * 8 + 1) - 1) / 2
  return Number.isInteger(result) ? result : -1
}
