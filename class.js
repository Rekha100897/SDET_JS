class person{
    constructor(f_name, l_name, skills)
    {
        this.f_name = f_name
        this.l_name = l_name
        this.skills = skills    }

        static a = 90
        b = 78

        Demo(){
            console.log(this.a);            //undefined
            console.log(person.a);          //90               ==>accessing static variable inside non static method
            console.log(this.f_name );      //thunder
            console.log(this.b);            //78               ==>accessing non static variable inside non static method 
        }

        static Sample(){
            console.log(person.f_name);       //undefined       
            console.log(this.a);            //90                ==>accessing static variable inside static method
            console.log(person.b);            //undefined       
           
            //creating an object
            let p = new person()               
            console.log(p.b);                  //78             ==>accessing non static variable inside static method
        }
        
        display(){
           
                this.Demo()
             
        }

        static display2(obj_ref){
            obj_ref.Demo()
        }
        
}

//creating an instance 
let data1 = new person("thunder","storm",["java", "selenium", "api", "javascript"])
let data2 = new person("Rekha","R",["java", "javascript", 8, 7])


//data passing 
// console.log(data1.f_name);          //thunder
// console.log(data1.a);               //undefined
// console.log(data1.b);               //78                    ==>accessing non static variable
// console.log(person.a);              //90                    ==>accessing static variable


//*****************************************************************************************/

// data1.Demo()                   // ==> invoking the non static method
// person.Sample()                // ==> invoking the static method
// data1.display()
person.display2(data1)         //p1 is an instance variable

set