// Any value you use is of a certain type. JS has the following primitive types

// Numbers
-1
3.14
100

//Stings

"can be with double quotes"
'or singles quotes strings'
"It's is my brithday"

//Booleans

true // True in python
false // false in python

// underfined: this is the type of variables that are declared but not assigned

var someVar // this is undefined

//Null: used to explicity declare thar a value has no value 

null 

// Rule of thumb: The js interpreter uses undefined. Developers (us)

//objects are very similar to python dicts

var someObject = {}

someObject['sayHello'] = function(){
    console.log("Hola Mundo");
} 
someObject.sayHello()

// functions

function firstFunction(name){
    console.log("Hola", name);
}

firstFunction('Boolean')