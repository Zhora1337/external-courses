var f4 = function(arr){
	var i;
	for (i = 1;i<arr.length;i++){
		if (arr[0]!==arr[i]){
			return false;
		}
	}
	return true;
}
console.log(f4([1,0,1,0]));
console.log(f4([1,1,1]));