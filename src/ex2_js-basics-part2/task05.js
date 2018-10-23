var f5 = function(arr) {
	var max = arr[0];
	for (var i = 0; i<arr.length; i++){
		if (max<arr[i]) max = arr[i];
	}
	console.log(max);
}

f5([12,-3,56,14]);