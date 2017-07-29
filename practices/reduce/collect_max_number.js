'use strict';

function collect_max_number(collection) {
    return collection.reduce((a, b) => {
        if (a > b) {
            return a;
        }
        return b;
    });
}

module.exports = collect_max_number;
