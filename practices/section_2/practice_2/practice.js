function count_same_elements(collection) {

    var objArr = [];
    var reg = /\[|\]|-|:/g;
    collection.map(function (elem) {
        for (var i = 0; i < objArr.length; i++) {
            if (elem.replace(reg, ",").split(",")[0] == objArr[i].key) {
                objArr[i].count += elem.replace(reg, ",").split(",")[1] ? parseInt(elem.replace(reg, ",").split(",")[1]) : 1;
                return;
            }
        }
        //not in current objArr
        objArr[objArr.length] = {
            key: elem.replace(reg, ",").split(",")[0],
            count: elem.replace(reg, ",").split(",")[1] ? parseInt(elem.replace(reg, ",").split(",")[1]) : 1
        }
    })
    return objArr;
}


var collection = [
    "a", "a", "a",
    "e", "e", "e", "e", "e", "e", "e",
    "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
    "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
    "f", "f", "f", "f", "f", "f", "f", "f", "f",
    "c", "c", "c", "c", "c", "c", "c", "c",
    "g", "g", "g", "g", "g", "g", "g",
    "b", "b", "b", "b", "b", "b",
    "d-5"
];
var result = count_same_elements(collection);
console.log(result);
module.exports = count_same_elements;
