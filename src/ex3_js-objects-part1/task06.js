var f5 = function (obj) {
    var copyObj = {};
    for (var key in obj){
        if (typeof(obj[key])==="object"){
            var deepCopy = {};
            for (var deepKey in obj[key]){
                deepCopy[deepKey] = obj[key][deepKey];
            }
            copyObj[key] = deepCopy;
        }else{
            copyObj[key] = obj[key];
        }
    }
    return copyObj;
}


var obj1 = {
    a:{a1:3, a2:4},
    b:3
}

var obj2 = f5(obj1);

for (var key in obj2){
    console.log(obj2[key]);
}