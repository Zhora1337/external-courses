var str = "hello world";
function upperFirstChar(string){
    var _string = new String(string);
    var _otherChars = _string.slice(1);
    string = _string[0].toUpperCase();
    return string+_otherChars;
}
console.log(upperFirstChar(str));
