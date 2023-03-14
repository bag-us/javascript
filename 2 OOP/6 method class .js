class Person {
    constructor (name){
        this.name = name;
    }
    sayhello (name){
        console.info(`hallo ${name}`);
    }
}

const satu = new Person("bagus");
console.info(satu.name);
satu.sayhello("two")