var add=function(number1,number2){
    var prom;
    prom = number1 + number2;
    number1 = prom.toFixed(3);
    return Number(prom);
}
console.log(add(3.4254,-9.23451));
console.log(typeof(add(3.4254,-9.23451)));