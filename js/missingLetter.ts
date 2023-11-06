export function findMissingLetter(array: string[]): string {
  const codeArray = array.map(value => value.charCodeAt(0))
  for (let i = codeArray[0]; i < codeArray[codeArray.length - 1]; i++) {
    if (!codeArray.includes(i)) return String.fromCharCode(i)
  }
  return ""
}
