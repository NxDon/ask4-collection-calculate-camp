'use strict';

function choose_no_repeat_number(collection) {
    return collection.filter((elem, index, array) => {
        return array.indexOf(elem) === index;
    });
}

module.exports = choose_no_repeat_number;
