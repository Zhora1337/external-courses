var f3 = function(arr){
	var even = 0;
	var odd = 0;
	var zeros = 0;
	for (var i = 0; i<arr.length; i++){
		if (arr[i]===0) {
            zeros++;
        }else if ((arr[i] % 2)===0) {
            even++;
        } else{
            odd++;
        }
    }
	console.log("четных: ",even,"; нечетных:", odd, "; нулей:", zeros,";");
}

f3([0,2,4,5]);