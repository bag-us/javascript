const myDate = new Date(); 
const a = myDate.getTime();        //milisecond
const now = new Date(a);           //di ubah ke tanggal
console.info(myDate.getMonth(),    //1-12
            myDate.getFullYear(),  //yyyy
            myDate.getDate(),      //1-31
            now
            );