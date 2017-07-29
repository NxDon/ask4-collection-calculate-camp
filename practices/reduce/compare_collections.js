'use strict';

function compare_collections(collection_a, collection_b) {
    //使用reduce方法目前没有想到更好的解决方案，只能是reduce拼接成字符串，然后比较？！
    var stra = collection_a.reduce((acc, curval, array) => {
        return acc + curval
    }, "");
    var strb = collection_b.reduce((acc, curval, array) => {
        return acc + curval
    }, "");
    return stra === strb;
}

module.exports = compare_collections;


