class Employee {
    constructor (firstname){
        this.firstname = firstname;
    }
    sayhello (name){
        console.info(`hallo ${name}, Employee ${this.firstname}`);
    }
}

class Manager extends Employee {
    constructor (firstname, lastname){
        super (firstname);
        this.lastname = lastname;
    }
    sayhello (name){
        console.info(`hallo ${name}, Manager ${this.firstname}`);
    }
}

const pekerja = new Employee("two");
pekerja.sayhello("two")

const manajer = new Manager("yoyo", "susi");
manajer.sayhello("two")
