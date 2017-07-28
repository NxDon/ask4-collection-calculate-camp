'use strict';

function average_uneven(collection) {
    //先过滤出奇数数组
    var oddArr = collection.filter((elem) => {
        return elem % 2 !== 0;
    })
    return oddArr.reduce((a,b) => {return a + b}) / oddArr.length;
}


module.exports = average_uneven;
