'use strict';

function hybrid_operation_to_uneven(collection) {
    var newArr = [];
    collection.forEach((elem) => {
        if (elem % 2 !== 0) {//是奇数
            newArr.push(elem * 3 + 5);
        }
    });
    return newArr.reduce((a, b) => {
        return a + b;
    });
}

module.exports = hybrid_operation_to_uneven;

