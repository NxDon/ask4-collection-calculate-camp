'use strict';
function rank_by_two_large_one_small(collection) {
    var sortedArr = collection.sort((a, b) => {
        return a - b
    });
    //  Math.floor(sortedArr.length / 3)   需要调整顺序的次数
    var index = 0;
    for (var i = 0; i < Math.floor(sortedArr.length / 3); i++) {
        var small = sortedArr.splice(index, 1);//删除一个小的
        small = parseInt(small.toString());//转换成Number
        sortedArr.splice(index + 2, 0, small);
        index += 3;
    }
    return sortedArr;
}

module.exports = rank_by_two_large_one_small;
