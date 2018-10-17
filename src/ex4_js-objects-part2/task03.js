var str = " hello world ";
function deleteSpaces(string){
    var _string = new String(string);
    string = _string.trim();
    return string;
}

console.log("\""+deleteSpaces(str)+"\"");