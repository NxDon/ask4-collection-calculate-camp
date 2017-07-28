'use strict';
var single_element = function(collection){
    var evenArr = collection.filter((elem,index) => {
        return index % 2 !== 0;
    });
    return evenArr.filter((elem,index,array) => {
         array.indexOf(elem) === array.lastIndexOf(elem);
     })

};

var collection_a = [1, 2, 3, 2, 5, 6, 21, 43, 12, 5];
console.log(single_element(collection_a));
module.exports = single_element;
