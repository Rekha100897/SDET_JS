
//***********************************eg1***************************************** 
var a =10
var b=70
function sample (){             //for sample global is lexically present
    console.log(a);
    var b=200
    console.log(b);
        function inner(){ 
            var a =30
            var b =80     //for inner, sample is lexically present
            console.log(a)
            console.log(b);
        }
        inner() 
}
sample()

//***********************************eg2***************************************** 
var a =10
var b=70
function sample (){             //for sample global is lexically present
    console.log(a);
    console.log(b);
    var b=200
    console.log(b);
    
        function inner(){      //for inner, sample is lexically present
            console.log(a) //undefined
            var a =700
            console.log(b); //200
            console.log(a); //700
        }
        inner()  
}
sample()

//***********************************eg3***************************************** 
// inner is lexically present inside the outer and outer is lexically present inside the global

function outer(value1){
    return function inner(value2){
        return (value1+value2)
    }
}

var add = outer(5)
//var add = function inner(value2){
    //     return (value1+value2)
    // }
console.log(add(7));

