var obj = {
    a:1,
    b:2
}

var objNew = Object.create(obj);

function  findKey(keyName, objectName) {
        return (objectName.hasOwnProperty(keyName)); 
}

objNew.c = 3;

console.log(findKey('c',objNew));
console.log(findKey('a',objNew));