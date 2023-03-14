// let array = [];
// let array1 = ["two", "bagus"];

// let nama = [];
// nama.push("two");
// nama.push("bagus", "sulaeman");

// console.info(nama);

// let eventNumber = [];
// for(i=1; i<=100; i++){
//     if(i % 2 == 0){
//       eventNumber.push(i);
//     }
//   }
// console.log(eventNumber);
const oneTwoThree = [1, 2, 3];
const sevenEightNine = [7, 8, 9];

const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

console.log(result);