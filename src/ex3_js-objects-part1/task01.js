var obj1 = {};

obj1.firtsField = 322;
obj1.secondField = 1337;

for (var key in obj1){
    console.log(obj1[key]);
}

delete obj1.firtsField;
console.log("after deleting...");
for (var key in obj1){
    console.log(obj1[key]);
}

