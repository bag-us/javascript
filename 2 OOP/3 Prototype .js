function Person(depan,belakang){
    this.depan = depan;
    this.belakang = belakang;
    this.sayhello = function(nama){
        console.info(`Halo ${nama}, Fuck You ${this.depan} ! `)
    }
}

Person.prototype.saybye = function(){
    console.info("Good Bye!");
}

const satu = new Person("Bagus", "Sulaeman");
const dua = new Person("Two", "Bangkit");


console.info(satu);
console.info(dua);

satu.saybye();