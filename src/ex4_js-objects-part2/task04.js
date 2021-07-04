var str = "hello world";
var upperFirstChar=function (string){
    var str = string;
    var otherChars = str.slice(1);
    string = str[0].toUpperCase();
    return string+otherChars;
}
console.log(upperFirstChar(str));
