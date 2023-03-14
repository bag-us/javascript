try {
    console.log("Awal blok try");
    consoler.log("Akhir blok try");
} catch (error) {
    // console.log("Tidak terjadi eror, maka kode ini diabaikan");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}finally {
    console.log("Akan tetap dieksekusi");
}