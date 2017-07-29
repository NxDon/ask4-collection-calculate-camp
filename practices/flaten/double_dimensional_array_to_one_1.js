'use strict';

function double_to_one(collection) {
    //只适用于数组元素没有","的情况
    var strCollection = collection.join(",").split(",");//数组中是字符串
    //增加了元素中含有","的情况的处理
    strCollection = strCollection.filter((elem) => {
        return elem;
    });
    return strCollection.map((elem) => {
        return parseFloat(elem);
    });
}

module.exports = double_to_one;
