'use strict';
var calculate_average = function(collection){
    //先过滤数组，然后reduce求和，然后除以length
    var evenArr = collection.filter((elem,index,arr) => {
        return index % 2 !== 0;
    });
    return evenArr.reduce((a,b) => {
            return a + b;
        }) / evenArr.length;
};
module.exports = calculate_average;
