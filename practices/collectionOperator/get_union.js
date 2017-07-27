'use strict';

function get_union(collection_a, collection_b) {
    var tempArr = collection_a.concat(collection_b);//连接两个数组
    return tempArr.filter((elem,index,array) => {
        return array.indexOf(elem) === index;
    });

}

module.exports = get_union;

