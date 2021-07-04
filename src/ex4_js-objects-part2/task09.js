var insertString=function(string1,string2,number){
    var _str = string1;
    var exitString ="";
    var i;
    _str = _str.split(" ");
    for (i=0; i<_str.length; i++){
        if (i===number){
            exitString = exitString + string2 + " ";
        }
        exitString = exitString+_str[i]+" "
    }
    return exitString;
}
console.log(insertString ("Hello friend","my dear",1));