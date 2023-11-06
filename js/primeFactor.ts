export const primeFactors = (n: number): string => {
  if (n === 1) return "1"
  function isPrime(n: number): boolean {
    if (n < 3) return true
    for (let i = 3; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false
    }
    return true
  }
  let factorizeArray: number[] = []
  while (true) {
    if (n % 2 === 0) {
      factorizeArray.push(2)
      n /= 2
    } else {
      break
    }
  }
  if (n === 3) factorizeArray.push(n)
  for (let i = 3; i < n; i += 2) {
    if (isPrime(n)) {
      factorizeArray.push(n)
      break
    }
    while (true) {
      if (n % i === 0) {
        factorizeArray.push(i)
        n /= i
      } else break
    }
  }

  return format(factorizeArray)
}
function format(n: number[]) {
  let uniqueElement = Array.from(new Set(n)).sort((a, b) => a - b)
  const occurrence = uniqueElement.reduce(
    (acc, curr) => ({ ...acc, [curr]: n.filter(v => v == curr).length }),
    {}
  )
  console.table(occurrence)

  let str = ""
  for (let [key, value] of Object.entries(occurrence)) {
    if (value === 1) str += `(${value})`
    else str += `(${key}**${value})`
  }
  return str
}
console.log(primeFactors(36))
