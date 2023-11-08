export function narcissistic(value: number): boolean {
  return (
    value ===
    value
      .toString()
      .split("")
      .reduce((acc, curr, _, arr) => acc + (+curr) ** arr.length, 0)
  )
}
