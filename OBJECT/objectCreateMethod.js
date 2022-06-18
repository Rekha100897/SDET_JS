var person = {
    fname : "C R",
    lname : "Pradeep",
    skillset : ["javascript", "webdriverIO", "java", "selenium_webdriver", "api"],
    YOE : 4,
    introduce : function () {
        console.log("hello all myself "+ this.fname +" "+this.lname);
    },
    bioData : {fname : "C R",
    adress : "INDIA",
    lname : "Pradeep",
    skillset : ["javascript", "webdriverIO", "java", "selenium_webdriver", "api"],
    YOE : 4,
    introduce : function () {
        console.log("hello all myself "+ this.fname +" "+this.lname);
    }}
}
 var person2 = Object.create(person)
 person2.__proto__ = person
 person2.fname = "xyz"
 person2.lname = "rs"
 console.log(person);
 console.log("=================");
 console.log(person2.skillset);
