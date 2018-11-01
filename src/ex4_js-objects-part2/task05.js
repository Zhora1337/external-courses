var findStr=function(string1, string2){
    var _str1 = string1;
    var _str2 = string2;
    var i;
    for (i=0;i<(_str1.length-_str2.length);i++){
        if (_str1.slice(i,_str2.length) == _str2){
            return true;
        }
    }
    return false;
}
console.log(findStr("hello world","hell"));
console.log(findStr("hello world","off"));