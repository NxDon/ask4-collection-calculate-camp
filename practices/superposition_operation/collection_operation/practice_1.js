'use strict';

function hybrid_operation(collection) {
    var newArr = collection.map((elem) => {
        return elem * 3 + 2;
    })
    return newArr.reduce((a,b) => {
        return a + b;
    })
}

module.exports = hybrid_operation;

