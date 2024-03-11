// Parent class
class Person{
    f_name:string;
    last_name:string;
    age:number;
    constructor(f_name:string,last_name:string,age:number){
    this.f_name=f_name;
    this.last_name=last_name;
    this.age=age;
    }
    eat(){
        console.log(`${this.f_name} is getting ready for fasting..`)
    }
    speaks(){
        console.log(`My name is ${this.f_name} ${this.last_name} , I am ${this.age} years old`)
    }
    }
    // Child class
    
    class Receptionist extends Person{
        occupation:string;
        shift:string;
        timings:string;
        constructor(f_name:string,last_name:string,age:number,occupation:string,shift:string,timings:string){
        super(f_name,last_name,age);
        this.occupation=occupation;
        this.shift=shift;
        this.timings=timings;
    
        }
        speaks() {
            super.speaks();
            console.log(`I am a ${this.occupation}`)
        }
        reception(){
            console.log(`I am doing my job`);
        }
    }
    
    let reception1= new Receptionist('Touseeq','Haider',28,'Hotel Receptionist','Evening','5pm to 1am');
   
    console.log(reception1)

    reception1.eat();
    reception1.reception();
    

    
    