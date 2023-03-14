const val1 = "1.1";
const val2 = 1;
const sum = val1 + val2; 

console.info(sum);
console.info(parseInt(val1));
console.info(parseFloat("1.2"));
console.info(Number("1.2"));
console.info(parseInt("salah"));
console.info(parseFloat("1.2salah"));
console.info(Number("1.2salah"));

const val3 = Number("gg");
console.info(isNaN(val3));
console.info(isNaN(100));