'use strict';
var single_element = function(collection){
    var evenArr = collection.filter((elem,index) => {
        return index % 2 !== 0;
    });
    var duplicate = [];
    evenArr.forEach((elem,index,array) => {
        if(array.indexOf(elem) !== array.lastIndexOf(elem)){//重复元素
            duplicate.push(elem);
        }
    })
    return evenArr.filter((elem) => {
        return !duplicate.includes(elem);
    })

};

module.exports = single_element;
