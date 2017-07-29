'use strict';

function compute_average(collection) {
    var sum = collection.reduce((a, b) => {
        return a + b;
    });
    return sum / collection.length;
}

module.exports = compute_average;

