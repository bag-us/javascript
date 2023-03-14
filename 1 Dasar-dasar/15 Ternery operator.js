const mtk = 75;

// if(mtk > 75){
//     console.info("Fuck You");
// }else{
//     console.info("Tolol");
// }

//mirip excel
// const nilai = mtk >= 70 ? "Lulus" : "Gagal";

// console.info(nilai);
const value = 0;
function calculate(value) {
    return value < 2 ? value : (calculate(value - 1));
}

console.log(calculate(3));