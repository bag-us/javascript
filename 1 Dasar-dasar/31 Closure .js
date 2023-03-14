//mengeluarkan isi function local ke global
function penambahan(value){
    const owner = "bagus";

    function tambah(param){
        console.info(owner);
        return value + param;
    }
    return tambah;
}
const tambahdua = penambahan(2);
console.info(tambahdua(10));