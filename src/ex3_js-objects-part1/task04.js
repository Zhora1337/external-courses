var f3 = function (keyName, obj){
    var flag = false;
    var key;
    for (key in obj){
        if (key === keyName){
            flag = true;
        } 
    }
    if (!flag) {
        obj.keyName = 'new';
    }
}
var obj4 = {
    a:1337
}
var key;
console.log('before adding...');
for (key in obj4){
    console.log(obj4[key]);
}
f3("b",obj4);
console.log('after adding...');
for (key in obj4){
    console.log(obj4[key]);
}