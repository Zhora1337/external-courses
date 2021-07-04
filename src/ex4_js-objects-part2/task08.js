var upperFirstChar = function (string){
    var _string = string;
    var _otherChars = _string.slice(1);
    string = _string[0].toUpperCase();
    return string+_otherChars;
}
var lowerFirstChar=function (string){
    var _string = string;
    var _otherChars = _string.slice(1);
    string = _string[0].toLowerCase();
    return string+_otherChars;
}
var lowerCamelCase=function(string){
    var _string = string;
    var i;
    _string = _string.split(" ");
    string ="";
    string = string+lowerFirstChar(_string[0]);
    for (i=1; i<_string.length;i++){
        _string[i] = upperFirstChar(_string[i]);
        string = string + _string[i];
    }
    return string;
}
console.log(lowerCamelCase("Hello my dear friends"));