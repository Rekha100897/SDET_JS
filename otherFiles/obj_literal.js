// var myself1 = {
//     fname : "Rekha",
//     lname : "R",
//     skillset : ["java", "Javascript"],  //array
//     greet : function(){                 //function
//         return "Hi this is "+this.fname+" "+this.lname
//     },
//     company : {                         //object
//         c_name : "TestYAntra",
//         depat : "RMG"
//     }
// }

// console.log(myself1.company.c_name);

// var myself2 = Object.create(myself1)
// myself2.__proto__ = myself1
// myself2.fname = "xyz"
// myself2.lname = "rs"

// console.log(myself2.skillset);

//************************************************************************** 
// var myself =  new Object()
// myself.fname = "Rekha",
// myself.lname = "R",
// myself.skillset = ["java", "Javascript"],
// myself.greet = function(){                 
//             return "Hi this is "+this.fname+" "+this.lname
//         },
// myself.company = {
//     c_name : "TestYAntra",
//     depat : "RMG"

// }
// console.log(myself.company);
//************************************************************************** 
// function myself (company, depart, skillset){
//     this.company = company
//     this.depart = depart
//     this.skillset= skillset
// }
// var m1 = new myself("test_yantra","RMG" , ["rekha","java"])
// console.log(m1);
//**************************************************************************

// class myself{
//     constructor(company,depart,skillset){
//     this.company = company
//     this.depart = depart
//     this.skillset= skillset
//     }
// }
// var m1 = new myself("test_yantra","RMG" , ["rekha","java"])
// console.log(m1);

//**************************************************************************

var myself  = {
    f_name : "Rekha",
    l_name : "R",
    yoe : 4,
    skillset : ["java", "selenium", "javascript", "api"],           //===>array

    greet : function(){                                                //===>function
        return "Hello all, I am "+" "+this.f_name+" "+this.l_name
    },

    company : {                                             //===>object
    c_name : "TestYantra",
    dept : "RMG team",

    }

}

var biodata = Object.create(myself)
biodata.__proto__=myself
biodata.f_name="Rek",
biodata.l_name="R"
console.log(biodata.skillset);

