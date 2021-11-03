//beggins with the 'function' and the name f the function
function sum(numA, numB) {
    console.log(arguments)
    var numC = numA + numB
    return numC
}
//when no arguments are passed
console.log(sum()) // =>Not a number nan
console.log(sum(1))
console.log(sum(1,2))

//numC is a local variable of the sun function
console.log(numC); //Error. numC only within the function

