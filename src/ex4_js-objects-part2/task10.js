var inverStr=function(string){
    var _str = string;
    var i;
    string = "";
    for (i=0; i<_str.length;i++){
        string = string + _str[_str.length-i-1];
    }
    return string;
}

console.log(inverStr("maddyson"));