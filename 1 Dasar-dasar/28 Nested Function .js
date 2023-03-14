function outer(){
    function inner(){
        console.info("DI Dalam");
    }
    inner();
}

outer();