'use strict';

function choose_no_common_elements(collection_a, collection_b) {
    return collection_a.filter((elem) => {
        return (collection_b.indexOf(elem) < 0)
    })
}

module.exports = choose_no_common_elements;
