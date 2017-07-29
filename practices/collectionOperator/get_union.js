'use strict';

function get_union(collection_a, collection_b) {
    var tempArr = collection_a.concat(collection_b);//连接两个数组
    //方法1，利用filter
    // return tempArr.filter((elem,index,array) => {
    //     return array.indexOf(elem) === index;
    // });
    //方法2，使用ES6 Set
    var s = new Set();
    tempArr.forEach((elem) => s.add(elem));
    return Array.from(s);
}

module.exports = get_union;

