function megaSum(){
  var argsArray = Array.from(arguments)
    console.log(argsArray)
// recorrer arguments y acumular la suma de cada elemento 
    var sum = 0
    for (var i = 0; i < arguments.length; i++){
        //if the type of the i argument is a number,only the add it to the sum
     if(typeof(arguments[i]) == 'number'){
       sum += arguments[i]
     }
        
    }
    return sum  
}


console.log(megaSum(1));
console.log(megaSum(1,2,3)); // => 6
console.log(megaSum(1,2,3,4)); //=> 10
console.log(megaSum(1,'Hola',3)) // => 4