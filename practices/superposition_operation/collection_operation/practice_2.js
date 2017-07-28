'use strict';

function hybrid_operation_to_uneven(collection) {
    var newArr = [];
    collection.forEach((elem) => {
        if(elem % 2 !== 0){//是奇数
            newArr.push(elem * 3 + 2);
        }
    })
    return newArr;
}

module.exports = hybrid_operation_to_uneven;

