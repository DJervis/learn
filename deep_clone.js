// 深拷贝

function deepClone() {
    var objClone = Array.isArray(obj) ? [] : {};
    if(obj && typeof obj === 'object') {
        for(key in obj) {
            if(obj[key] && typeof obj[key] === 'object') {
                objClone[key] = deepClone(obj[key])
            } else {
                objClone[key] = obj[key]
            }
        }
    }
    return objClone
}


var aa = {
    arr: [1,2,3,4],
    obj: {
        cc: [1,2,3]
    }
}
var bb = deepClone(aa);
bb.obj.cc[1] = 0;
console.log(aa)
console.log(bb)