'use strict';

function find_last_even(collection) {
    for (var elem of collection.reverse()) {
        if (elem % 2 === 0) {
            return elem;
        }
    }
}

module.exports = find_last_even;
