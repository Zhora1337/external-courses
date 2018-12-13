var f2 = function (keyName, obj){
    var flag = false;
    var key;
    for (key in obj){
        if (key === keyName) {
            flag = true;
        }
    }
    console.log(flag);

}
var key1 = 'a';
var key2 = 'b';
var obj3 = {
    a:1337
}
f2(key1,obj3);
f2(key2,obj3);