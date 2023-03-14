//mempermudah pengambilan array 

//array
{
    const array = ["two", "bagus", "sulaeman", "bangkit"];
    const [depan, tengah, belakang, ...other] = array;

    console.info(depan);
    console.info(tengah);
    console.info(belakang);
    console.info(other);
}

//Object
{
    const objek = {
        depan: "bagus",
        belakang: "bangkit",
        alamat: {
            kota: "bekasi"
        },
        hobby: "game"
    };

    // const {depan, belakang, alamat, ...other} = objek;
    const {depan, belakang, alamat:{kota}, ...other} = objek;
    console.info(depan);
    console.info(belakang);
    // console.info(alamat);
    console.info(kota);
    console.info(other);
}