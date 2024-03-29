function megaSum(){
    var sum = 0
    var argArray = Array.from(arguments)
    //a functiom passed to other function  is known as
    function onlyNumbers(elem){
        return typeof(elem) == 'number' && !isNaN(elem)
 
    }
    function accumulate(elem){
        sum += elem
    }

 argArray.filter(onlyNumbers).forEach(accumulate)

return sum
}

console.log(megaSum(1));
console.log(megaSum(1,2,3)); // => 6
console.log(megaSum(1,2,3,4)); //=> 10
console.log(megaSum(1,'Hola',3)) // => 4
console.log(megaSum(1,'Hola',NaN)) // => NaN