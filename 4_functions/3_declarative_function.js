function megaSum(){
    var sum = 0
    var argArray = Array.from(arguments)
    //a function passed o other function is knwon as 'callback' in javascript
    argArray.forEach(function(elem){
        if(typeof(elem) == 'number'){
            sum += elem
        }
    })
    return sum
}


console.log(megaSum(1));
console.log(megaSum(1,2,3)); // => 6
console.log(megaSum(1,2,3,4)); //=> 10
console.log(megaSum(1,'Hola',3)) // => 4






