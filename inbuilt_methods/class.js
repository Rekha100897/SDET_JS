class biodata{
    constructor(f_name,l_name,email){
        this.f_name = f_name
        this.l_name = l_name
        this.email = email
    }

    a =20               //non static variable
    static b= 89        //static variable

    display(){
        console.log(this.a);        //20
        console.log(this.b);        //undefined
        console.log(biodata.b);     //89
    }

    static sample(){
        console.log(this.a);         //undefined
        console.log(this.b);        //89
        console.log(biodata.b);     //89

        //creating an object
        let p = new biodata()
        console.log(p.a);           //20
    }

    //case 1: invoking a non static method inside a non static method

    // display2(){
    //     this.display()          //20    undefined       89
    // }

    //case 2: invoking a static method inside a non static method
        // display3(){
        //     biodata.sample()        //89        89      20      undefined
        // }

    //case 3: invoking static method inside a static method
    // static sample2(){
    //     this.sample()                   //89        89      20      undefined          
    // }

    //case 4: invoking a non static method inside the static method
    //==>by creating an object referrence  
    static sample3(obj_ref){
        obj_ref.display()                   //20    undefined       89
    }
}

//create an instance

let b1 = new biodata("manohara","Reddy","mReddy@gmail.com")
let b2 = new biodata("Niraj", "Kumar","nKumar@gmail.com")

// console.log(b1.biodata);
// console.log(b1.a);
// console.log(biodata.b);

// b1.display3()
biodata.sample3(b1)