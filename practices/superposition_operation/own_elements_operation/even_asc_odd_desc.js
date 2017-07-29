'use strict';
let even_asc_odd_desc = function (collection) {
    let oddArr = [],
        evenArr = [];
    collection.forEach((elem) => {
        if (elem % 2 === 0) {//even
            evenArr.push(elem);
        } else {
            oddArr.push(elem);
        }
    });
    evenArr.sort((a, b) => {
        return a - b;
    });
    oddArr.sort((a, b) => {
        return b - a;
    });
    return evenArr.concat(oddArr)

};
module.exports = even_asc_odd_desc;
