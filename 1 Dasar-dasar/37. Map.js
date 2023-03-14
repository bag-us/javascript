const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);

/** ------------------------------------------------- */

let visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
    // let count = visitsCountMap.get(user) || 0;
    let count = (visitsCountMap.size);
    visitsCountMap.set(user, count + 1);
    console.log(visitsCountMap.get(user));
}

countUser("jonas");                // Menambahkan user "Jonas"
countUser("omo");                // Menambahkan user "Jonas"

visitsCountMap.delete("jonas")   // Data object "Jonas" dihapus
console.log(visitsCountMap);

