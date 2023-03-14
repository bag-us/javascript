// function Person(){
function Person(depan,belakang){
    // this.depan = "";
    // this.belakang = "";
    this.depan = depan;
    this.belakang = belakang;
    this.sayhello = function(nama){
        console.info(`Halo ${nama}, Fuck You ${this.depan} ! `)
    }
}

const satu = new Person("Bagus", "Sulaeman");
// satu.depan = "Bagus";
// satu.belakang = "Sulaeman";
satu.sayhello("Angga");

const dua = new Person("Two", "Bangkit");
// dua.depan = "Two";
// dua.belakang = "Bangkit";
dua.sayhello("Tono");

console.info(satu);
console.info(dua);