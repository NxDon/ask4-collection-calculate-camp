'use strict';

function double_to_one(collection) {
    //只适用于数组元素没有"，"的情况
    var strCollection = collection.join(",").split(",");//数组中是字符串
    return strCollection.map((elem) => {
        return parseFloat(elem);
    })
}

module.exports = double_to_one;
