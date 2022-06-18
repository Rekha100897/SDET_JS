var person1 = {
    fname : "Rekha",
    lname : "R",
    introduce : function () {
        console.log("hello all myself "+ this.fname+" "+this.lname);
    }
}
var person2 = {
    fname : "Thunder",
    lname : "Storm",
    fullname : function () {
        console.log(this.fname + " " +this.lname);
    }
}

function greeting(greet1,greet2,greet3) {
    console.log(greet1+" "+this.fname + " " +this.lname+" "+greet2+" "+greet3);
}

// person1.introduce.apply(person2)
greeting.apply(person1,["hello", "Good morning", "welcome"])

