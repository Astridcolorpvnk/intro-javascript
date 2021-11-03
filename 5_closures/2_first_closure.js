//A closure is function inside other function
//the inner function has access to the elements of the outer function
// high order functions

function counter(firstValue){
    var currentValue = firstValue

    var increment = function(step){
        currentValue += step
        console.log("El valor actual es: ",currentValue)
    }

    return increment
}

var exampleCounter = counter(10)

exampleCounter(1)
exampleCounter(2)
exampleCounter(5)