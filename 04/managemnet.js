class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    
}

const person = new Person('Salman', 20);
console.log(person.name);
console.log(person.age);


class Employee extends Person{
    constructor(name, age, jobTitle){
        super(name, age);
        this.role = jobTitle;
    }

    introduce (){
        return `${super.introduce()} I am a ${this.jobTitle}`
    }
}

class Manager extends Employee{
    #bonus
    constructor(name, age,jobTitle, salary,bonus){
        super(nama, age, jobTitle)

    }
}