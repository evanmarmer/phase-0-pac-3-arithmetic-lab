let number
function add(a,b){
    number = a + b
    return number
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function increment(a){
    number = a + 1
    return number
}

function decrement(a){
    number = a - 1
    return number
}

function makeInt(a){
    number = parseInt(a,10)
    return number
}

function preserveDecimal(a){
    number = parseFloat(a)
    return number
}