// the mix of high order functions,plus dictionaries with functions(objects) plus LIFE
//allow  us to create modules (module pattern)
var counter = (function(firstValue){
    var currentValue = firstValue

    var logger = function () {

    }
    var increment = function(step){

    }
    var decrement = function(step){


    }

    return { inc: increment,
            dec: decrement }
})()
counter.inc(2)
counter.dec(3)








