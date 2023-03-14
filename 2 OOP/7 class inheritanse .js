class Employee {
    sayhello (name){
        console.info(`hallo Employee ${name}`);
    }
}

class Manager extends Employee {
    sayhello (name){
        console.info(`hallo Manager ${name}`);
    }
}

const pekerja = new Employee();
// pekerja.name = "Bangkit";
pekerja.sayhello("two")

const manajer = new Manager();
// pekerja.name = "Bangkit";
manajer.sayhello("bagus")

// console.info(satu.name);