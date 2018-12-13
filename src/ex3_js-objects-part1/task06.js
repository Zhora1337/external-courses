var f5 = function (obj) {
    var copyObj = {};
    var key;
    for (key in obj){
        if (typeof(obj[key])==="object"){
            copyObj[key] = f5(obj[key]);
        }else{
            copyObj[key] = obj[key];
        }
    }
    return copyObj;
}
var obj1 = {
    a:{a1:3, a2:{a21:3, a22:4}},
    b:3
}
var obj2 = f5(obj1);
console.log(obj2);