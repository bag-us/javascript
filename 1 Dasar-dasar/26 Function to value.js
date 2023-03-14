function nama(depan,belakang){
    console.info(`${depan} ${belakang}`);
}
// nama("bagus", "sulaeman");

const say = nama;        //ambil dari function
say("Two", "Bangkit");

//--------------------------
function gimmiename(myname){
    myname("baguz","");
}

gimmiename(say);