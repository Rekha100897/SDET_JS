var person1 = {
    fname : "Lava",
    lname : "M",
    introduce : function () {
        // console.log("hello all myself "+ this.fname+" "+this.lname);
        // console.log(this.fname);
        this.fullname.call(person1)
    }

}

var person2 = {
    fname : "Niraj",
    lname : "Kumar",
    age : 24,
    fullname : function () {
        console.log("hi "+this.fname + " " +this.lname);
       
    }  
}

person1.introduce.call(person2)








function greeting(greet1,greet2) {
    console.log(greet1+" "+this.fname + " " +this.lname+" "+greet2);
}


// person1.introduce()
// person2.fullname()

//                    //function barrowing
// greeting.call(person1,"good evening", "welcome")
// greeting.call(person2,"good evening", "welcome")