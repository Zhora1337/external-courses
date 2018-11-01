var points = function (string,number){
    var _str =string;
    if (_str.length>number){
        _str = _str.slice(0,number);
        _str = _str.concat("...");
    }else{
        return string;
    }
    string = _str;
    return string;
}
console.log(points("hello world",7));