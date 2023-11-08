export class Solution {
  static solution(number: number) {
    return Array.from({ length: number - 1 }, (_, index) => index + 1)
      .filter(v => v % 3 === 0 || v % 5 === 0)
      .reduce((acc, curr, _) => acc + curr, 0)
  }
}
console.log(Solution.solution(10))
