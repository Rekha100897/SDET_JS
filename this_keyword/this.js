
//the value of this keyword depends on the scope where you have used



let myself2 = {
    fname : "Smitha",
    lname : "S",
    greet : function(){
        console.log(this.age);
    }
}

let myself = {
    fname : "Sanjay",
    lname : "Kumar",
    age : 25,
    greet : function(){
       // console.log(myself2.fname);
        var a =10
        console.log(a);   //10
        this.a = a
        console.log(this.a);       //10
        console.log(myself.a); //10
    }
}

myself.greet()


