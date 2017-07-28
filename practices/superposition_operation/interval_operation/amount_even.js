'use strict';

function amount_even(collection) {
    //先过滤出只含有偶数的数组，然后reduce求和
    return collection.filter((elem) => {
        return elem % 2 === 0;
    }).reduce((a,b) => {
        return a + b;
    })
}

module.exports = amount_even;
