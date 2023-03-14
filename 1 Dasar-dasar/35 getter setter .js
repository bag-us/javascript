//GET
const person = {
    depan: "two",
    belakang: "bagus",
    get fungsi(){
        return `${this.depan} ${this.belakang}`;
    },
    set fungsi(value){
        const array = value.split(" ")
        this.depan = array[0];
        this.belakang = array[1];
    }
}

person.fungsi = "Asu Tenan";
console.log(person);

person.fungsi = "bang kadir";
console.table(person);

