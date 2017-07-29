'use strict';

function find_first_even(collection) {
    for (var elem of collection) {
        if (elem % 2 === 0) {
            return elem;
        }
    }
}

module.exports = find_first_even;

