var f1 = function(obj) {
    var key;
    console.log("Keys:");
    for (key in obj){
        console.log(key);
    }
    console.log("Props:");
    for (key in obj){
        console.log(obj[key]);
    }
}
var obj2 = {
    a:1337,
    b:322
}
f1(obj2);