// function factorial(value){
//     let result = 1;
//     for(let i = 1; i<= value; i++){
//         result *= i;
//     }
//     return result;
// }

// console.info(factorial(7));

function factorialrecursive(value){
    if (value === 1){
        return 1;
    }else{
        return value * factorialrecursive(value - 1);
    }
}
console.info(factorialrecursive(5));