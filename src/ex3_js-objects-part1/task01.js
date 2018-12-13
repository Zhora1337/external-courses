var obj1 = {};
var key;
obj1.firtsField = 322;
obj1.secondField = 1337;
for (key in obj1){
    console.log(obj1[key]);
}
delete obj1.firtsField;
console.log("after deleting...");
for (key in obj1){
    console.log(obj1[key]);
}

