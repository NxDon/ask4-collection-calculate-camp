'use strict';

function collect_min_number(collection) {
    return collection.reduce((a, b) => {
        if (a < b) {
            return a;
        }
        return b;
    });
}

module.exports = collect_min_number;

