var f4 = function (obj) {
    var copyObj = {};
    var key;
    for (key in obj){
        copyObj[key] = obj[key];
    }
    return copyObj;
}
var obj1 = {
    a:1337,
    b:322
}
var obj2 = f4(obj1);
var key;
console.log('copied objeect:');
for (key in obj2){
    console.log(obj2[key]);
}