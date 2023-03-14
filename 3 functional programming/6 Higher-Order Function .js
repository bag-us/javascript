// const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

// const arrayMap = (arr, action) => {
//   const loopTrough = (arr, action, newArray = [], index = 0) => {
//     const item = arr[index];
//     if(!item) return newArray;
//     return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
//   }

//   return loopTrough(arr, action);
// }

// const newNames = arrayMap(names, (name) => `${name}!` );

// console.log(names);
// console.log(newNames);

const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});
console.log(newArray);


const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
console.log(truthyArray);


const keranjang = [
{
    produk: 'Indomie Mie Goreng',
    harga: 2500
},
{
    produk: 'Sepatu Sport',
    harga: 75000
}
]
const initialValue = 1; 
const totalHarga = keranjang.reduce((accumulator, currentValue) => 
accumulator + currentValue.harga, initialValue)
// 0 + 2500
// 2500 + 75000
console.log('Rp.' + totalHarga)


const array1 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);