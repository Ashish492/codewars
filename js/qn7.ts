export function number(busStops: [number, number][]): number {
  return busStops.reduce(
    (acc, [inPassenger, outPassenger]) => acc + inPassenger - outPassenger,
    0
  )
}
export const isPangram = (phrase: string): boolean => {
  const alphabetArray = Array(26)
    .fill(0)
    .map((_v, k) => String.fromCharCode(k + 65))
  const upperPhrase = phrase.toLowerCase()
  let pangram = true
  for (let i = 0; i < alphabetArray.length; i++) {
    const char = alphabetArray[i]
    if (upperPhrase.indexOf(char) === -1) {
      pangram = false
      break
    }
  }
  return pangram
}

export const isPangram1 = (phrase: string): boolean => {
  let lowerPhrase = phrase.toLowerCase()
  let filterPhrase = Array.from(new Set([...lowerPhrase])).filter(v =>
    /^[a-z]$/.test(v)
  )
  return filterPhrase.length === 26
}
enum DNA {
  "A" = "T",
  "C" = "G",
  "T" = "A",
  "G" = "C",
}
type dnaType = keyof typeof DNA

export class Kata {
  static dnaStrand(dna: string) {
    // let complement = { G: "C", C: "G", A: "T", T: "A" }
    // type keyType = keyof typeof complement
    // let str = ""
    // for (let item of dna) {
    //   let char = <keyType>item
    //   str += complement[char] ?? item
    // }
    // return str
    return Array.from(dna, v => DNA[<dnaType>v] ?? v)
  }
}

export function tribonacci(
  [a, b, c]: [number, number, number],
  n: number
): number[] {
  if (n < 1) return [] as number[]
  if (n < 4) return [a, b, c].slice(0, n)
  let returnArray = [a, b, c]
  for (let index = 3; index < n; index++) {
    returnArray.push(
      returnArray[index - 1] + returnArray[index - 2] + returnArray[index - 3]
    )
  }
  return returnArray
}
function generateFibonacci(n: number): number[] {
  let baseFib = [0, 1]
  for (let i = 0; baseFib.length < n; i++) {
    baseFib.push(baseFib[i] + baseFib[i + 1])
  }
  return baseFib
}
console.log(generateFibonacci(14))

export const high = (str: string): string => {
  const wordArray = str.split(" ")

  const wordToNum = wordArray.map(word =>
    [...word].reduce(
      (acc, char) => acc - 64 + char.toUpperCase().charCodeAt(0),
      0
    )
  )
  console.log(wordToNum)

  return wordArray[wordToNum.indexOf(Math.max(...wordToNum))]
}
console.log(high("i am ashish a"))

export const digitalRoot = (n: number): number => {
  function calc(n) {
    return [...n.toString()].reduce((acc, curr) => acc + parseInt(curr), 0)
  }
  let res = calc(n)
  return res > 9 ? digitalRoot(res) : res
  //return (n-1)%9+1
}
