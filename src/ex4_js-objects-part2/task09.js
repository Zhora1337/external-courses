function insertString(string1,string2,number){
    var _str = new String(string1);
    var exitString ="";
    _str = _str.split(" ");
    for (var i=0; i<_str.length; i++){
        if (i===number){
            exitString = exitString + string2 + " ";
        }
        exitString = exitString+_str[i]+" "
    }
    return exitString;
}


console.log(insertString ("Hello friend","my dear",1));