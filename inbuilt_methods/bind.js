var person1 = {
    fname : "Software",
    lname : "Solutions",
    introduce : function () {
        console.log("hello all myself "+ this.fname+" "+this.lname);
    }
}
var person2 = {
    fname : "Test",
    lname : "Yantra",
    fullname : function () {
        console.log(this.fname + " " +this.lname);
    }
}

function greeting(greet1,greet2) {
    console.log(greet1+" "+this.fname + " " +this.lname+" "+greet2);
}

var returnedCopy = greeting.bind(person1,"hello", "good morning", "welcome")
returnedCopy()

// var result = person2.fullname.bind(person1)
// result()