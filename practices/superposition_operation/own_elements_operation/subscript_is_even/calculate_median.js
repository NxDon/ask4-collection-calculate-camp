'use strict';
var calculate_median = function(collection){
    var evenArr = collection.filter((elem,index) => {
        return index % 2 !== 0;
    })
    return compute_median(evenArr);
};

function compute_median(collection) {
    var arr = collection.sort(function (a,b) {
        return b - a;
    });
    if(arr.length % 2 != 0){
        return arr[Math.floor(arr.length / 2)];
    }else{
        return (parseInt(arr[arr.length / 2]) + parseInt(arr[arr.length / 2 - 1])) / 2;
    }
}
module.exports = calculate_median;
