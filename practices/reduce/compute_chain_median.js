'use strict';

function compute_chain_median(collection) {
    var arr = collection.split("->").sort(function (a, b) {
        return b - a;
    });
    if (arr.length % 2 != 0) {
        return arr[Math.floor(arr.length / 2)];
    } else {
        return (parseInt(arr[arr.length / 2]) + parseInt(arr[arr.length / 2 - 1])) / 2;
    }
}

module.exports = compute_chain_median;
