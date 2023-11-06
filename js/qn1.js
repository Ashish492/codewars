function filter_list(l) {
  l.filter(v => typeof v === "number")
}
function maskify(input) {
  if (input.length > 3) {
    return "#".repeat(input.length - 4) + input.substr(-4)
  }
  return input
}
function maskify2(cc) {
  return cc.slice(-4).padStart(cc.length, "*")
}
console.log(maskify2("12345"))

function alphabetPosition(text) {
  let alpha = Array(26)
    .fill(0)
    .reduce((acc, _v, i) => {
      return { ...acc, [String.fromCharCode(i + 65)]: i + 1 }
    }, {})
  const lowerText = text.toUpperCase()
  let returnStr = ""
  // return [...lowerText].map(v => alpha[v]).filter((v)=>(!!v)).join(" ")
  for (let char of lowerText) {
    isAlpha(char) && (returnStr = +`${alpha[char]}` + " ")
  }
  return returnStr
}

console.log(alphabetPosition(""))
console.log(Array(4).fill("").join(""), "1")
const isAlpha = char => /^[A-Za-z]$/.test(char)
