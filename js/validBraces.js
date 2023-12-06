function validBraces(braces){
    const bracesMap=new Map([['{','}'],['(',')'],['[',']']])
    function isClosingPair(opening,closing){
      return bracesMap.has(opening) && bracesMap.get(opening)===closing
    }
    let charStack=[]
    for(const brace of braces){
      if(bracesMap.has(brace)) charStack.push(brace)
      else {
        if(charStack.length===0 || !isClosingPair(charStack.pop(),brace)){
          return false
        }
      }
    }
    return charStack.length===0
  }
  console.log(validBraces("(((({{"))