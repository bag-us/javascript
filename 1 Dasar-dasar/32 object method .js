//function di dalam object

function name(value){
    console.info("Halo " + value)
}

const objek = {
    nama : "bagus",
    fungsi: name
};

objek.name("agus");