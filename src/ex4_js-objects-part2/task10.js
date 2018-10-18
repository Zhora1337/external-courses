function inverStr(string){
    var _str = string;
    string = "";
    for (var i=0; i<_str.length;i++){
        string = string + _str[_str.length-i-1];
    }
    return string;
}

console.log(inverStr("maddyson"));