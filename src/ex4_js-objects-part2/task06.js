var upperFirstChar = function(string){
    var _string = string;
    var _otherChars = _string.slice(1);
    string = _string[0].toUpperCase();
    return string+_otherChars;
}
var upEachWord = function(string) {
    var _string = string;
    var i;
    _string = _string.split(" ");
    string = "";
    for (i=0; i<_string.length;i++){
        _string[i] = upperFirstChar(_string[i]);
        string = string + _string[i] +" ";
    }
    return string;
}
console.log(upEachWord("hello world"));