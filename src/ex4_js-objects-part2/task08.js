function upperFirstChar(string){
    var _string = string;
    var _otherChars = _string.slice(1);
    string = _string[0].toUpperCase();
    return string+_otherChars;
}
function lowerFirstChar(string){
    var _string = string;
    var _otherChars = _string.slice(1);
    string = _string[0].toLowerCase();
    return string+_otherChars;
}

function lowerCamelCase(string){
    var _string = string;
    _string = _string.split(" ");
    string ="";
    string = string+lowerFirstChar(_string[0]);
    for (var i=1; i<_string.length;i++){
        _string[i] = upperFirstChar(_string[i]);
        string = string + _string[i];
    }
    return string;
}

console.log(lowerCamelCase("Hello my dear friends"));