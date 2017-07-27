'use strict';

function double_to_one(collection) {
    var strCollection = collection.join(",").split(",");//数组中是字符串
    return strCollection.map((elem) => {
        return parseFloat(elem);
    }).filter((elem,index,array) => {
        return array.indexOf(elem) === index;
    })
}

module.exports = double_to_one;
