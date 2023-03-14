//AKSES ATRIBUT DI DALAM OBJECT

const person = {
    nama: "bagus",
    fungsi: function (value){
        console.info(`Hello ${value}, nama saya ${this.nama}`);
    }
};
person.fungsi("two");