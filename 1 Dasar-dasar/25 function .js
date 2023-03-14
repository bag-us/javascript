function apapun(){
    console.info("Hello Bang");
}
apapun();

//------------------------------------
function nama(depan,belakang){
    console.info(`${depan} ${belakang}`);
}
nama("bagus", "sulaeman");

//------------------------------------
function mapel(mapel1, mapel2){
    const ujian = `${mapel1} & ${mapel2}`;
    return ujian;
}
const result = mapel("MTK", "KIMIA");
console.info(result);

//------------------------------------
function getvalue(value){
    if(value >= 85){
        return "A";
    }else{
        return "Tolol";
    }
}
const inputvalue = getvalue(90);
console.info(inputvalue);

//---------REST PARAM------------------
function sum(nama, ...data){
    let total = 0;
    for(const item of data){
        total += item;
    }
    console.info(`Total ${nama} : ${total}`);
}
sum("Apel", 6,9);
sum("Mangga", 6,4,65,12,54,23);

//--- SPEAD SYNTAX = Ubah array ke REST PARAM ---
const values = [10,10,10];
sum("hasil ", ...values);