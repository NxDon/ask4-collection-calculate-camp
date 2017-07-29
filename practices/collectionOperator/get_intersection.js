'use strict';

function get_intersection(collection_a, collection_b) {
    //因为测试代码要求返回的数组顺序一定，否则这里用collection_a.filter效果完全一样
    var arr = collection_b.filter((elem) => {
        if (collection_a.indexOf(elem) >= 0) {
            return true;
        }
        return false;
    });
    return arr;
}

module.exports = get_intersection;
