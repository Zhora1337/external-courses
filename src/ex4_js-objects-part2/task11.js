function charDetect(string){
    var _str = string;
    var count = 0;
    var i, j;
    for (i=0; i<_str.length;i++){
        count = 0;
        for (j=0; j<_str.length;j++){
            if (_str[i]===_str[j]){
                count++;
            }
        }
        console.log(_str[i] + " " + count + " раз\n");
    }
}
console.log(charDetect("hello world"));