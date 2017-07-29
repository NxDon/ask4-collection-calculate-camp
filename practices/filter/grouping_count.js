'use strict';

function grouping_count(collection) {
    var obj = {};
    //获取对象的键集合
    var objKeys = collection.filter((elem, index, array) => {
        return array.indexOf(elem) === index;
    });
    objKeys.forEach((elem) => {
        obj[elem] = 0;
    });
    collection.forEach((elem) => {
        obj[elem]++;
    });
    return obj;
}

module.exports = grouping_count;
