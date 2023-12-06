function secDegSolver(a,b,c){
    if(a===0&&b===0&&c===0){
        return "The equation is indeterminate"
    }
    if(a===0){
        if(b !==0 &&c!==0 ) return `It is a first degree equation. Solution: ${round(-1*c/b)}`
        if(b===0&& c!==0) return "Impossible situation. Wrong entries";
        if(c===a&&b!==0) return "It is a first degree equation. Solution: 0.0"
    }else{
        const delta=b**2-4*a*c;
        switch(Math.sign(delta)){
            case 0:return `It has one double solution:${(((-1*b)+Math.sqrt(delta))/(2*a))}`
            case 1:return `Two solutions: ${[round(((-1*b)+Math.sqrt(delta))/(2*a)),round(((-1*b)-Math.sqrt(delta))/(2*a))].sort((a,b)=>a-b)}`
            case -1:return  "There are no real solutions"
        }
    }
}
function round(number) {
    return parseFloat(number.toFixed(10));
}