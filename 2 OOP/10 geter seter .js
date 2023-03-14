class Person {
    constructor (firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get fullname(){
        return `${this.firstname} ${this.lastname}`;
    }
    set fullname(value){
        const result = value.split(" ");
        this.firstname = result[0];
        this.lastname = result[1];
    }
}

const nama = new Person("Bagus", "Two");
console.info(nama);

console.log(nama.fullname);

nama.fullname = "bang kadir";
console.table(nama);
