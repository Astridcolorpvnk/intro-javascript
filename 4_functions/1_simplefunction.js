function sum(numA, numB) {
    var numC = numA + numB
    return numC
}
console.log(sum(1,2))
//numC is a local variable of the sun function
console.log(numC); //Error. numC only within the function
