'use strict';

function choose_divisible_integer(collection_a, collection_b) {
    return collection_a.filter((elemA) => {
        return collection_b.some((elemB) => {
            return exact_division(elemA, elemB);
        })
    });
    //判断是否能够整除
    function exact_division(dividen, divisor) {
        return dividen % divisor === 0;
    }
}

module.exports = choose_divisible_integer;
