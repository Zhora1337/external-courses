var f6 = function(number){
	var count = 0;
	var i;
	for (i = 0; i<number; i++){
		if ((number % i) === 0) count++;
	}
	if (count <= 2) console.log("Число ", number, " - простое"); else console.log("Число ", number, " - составное");
}
f6(17);
f6(31);
f6(32);