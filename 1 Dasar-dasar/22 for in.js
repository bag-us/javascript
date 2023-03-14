const person = {
    nama : "Bagus",
    Umur : 90
};

for(const property in person){
    console.info(`${property} : ${person[property]}`);
}

const nama = ["Two", "Bagus"];
for(const index in nama){
    console.info(`${index} : ${nama[index]}`);
}