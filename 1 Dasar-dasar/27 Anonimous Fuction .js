const say = function(name){
    console.info("Halo "+ name);
}

say("Bagus");
say("two");

function kasihnama(callback){
    callback("sulaeman");
}

kasihnama(say);

kasihnama(function(name){
    console.info("Hi "+ name);
});