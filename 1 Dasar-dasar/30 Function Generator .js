// SEDERHANA
// function* buatnama(){
//     yield "Two";
//     yield "Bagus";
//     yield "Sulaeman";
// }

// const namas = buatnama();
// for (const nama of namas){
//     console.log(nama);
// }

//lazy
function* ganjil(value){
    for(let i =1; i<= value; i++){
        if(i % 2 === 1) {
            yield i;
        }
    }
}
const numbers = ganjil(20);
for (const number of numbers){
        console.info(number);
    }
// console.log(numbers.next().value);
// console.log(numbers.next().value);
// console.log(numbers.next().value);