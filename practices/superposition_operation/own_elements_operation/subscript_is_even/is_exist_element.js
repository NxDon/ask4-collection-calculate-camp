'use strict';
var is_exist_element = function (collection, element) {
    return collection.filter((elem, index) => {
            return index % 2 === 0;
        }).indexOf(element) >= 0;
};
module.exports = is_exist_element;
