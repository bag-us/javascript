function Person(depan){
    this.depan = depan;
    this.sayhello = function(nama){
        console.info(`Halo ${nama}, Fuck You ${this.depan} ! `)
    }
}

function Manager(depan, belakang){
    Person.call(this, depan);
    this.belakang = belakang;
}

const orang = new Person("Asu");
orang.sayhello("Fuck")

const bagus = new Manager("Two", "Bangkit");

console.info(bagus);