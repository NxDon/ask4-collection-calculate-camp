'use strict';
var even_group_calculate_average = function(collection){
    var result = [];
    var evenArr = collection.filter((elem,index) => {
        return index % 2 !== 0 && elem % 2 == 0;//index是偶数且这个元素也是偶数
    })
    if(evenArr.length === 0) {
        return [0];
    }else{
        var arr1 = [],
            arr2 = [],
            arr3 = [];
        var arrList = [arr1,arr2,arr3];
        evenArr.forEach((elem) => {
            switch (getNumberDigit(elem)){
                case 1:
                    arr1.push(elem);
                    break;
                case 2:
                    arr2.push(elem);
                    break;
                case 3:
                    arr3.push(elem);
                    break;
            }
        });
        arrList.forEach((elem) => {
            if(elem.length > 0){//非空数组
                result.push(calculate_average(elem));
            }
        })
        return result;
    }
};

var calculate_average = function(collection){
    //先过滤数组，然后reduce求和，然后除以length
    return collection.reduce((a,b) => {
            return a + b;
        }) / collection.length;
};
function getNumberDigit(numInStr) {
    return numInStr.toString().length;
}
var collection_a = [1, 2, 3, 4, 5, 6, 12, 454, 324, 21, 45, 644, 34, 56, 345, 570, 8, 4, 14];
var collection_b = [1, 3, 5, 7, 33, 55, 31, 555, 777];
var collection_c = [344, 256, 55, 777, 322, 180];
var result = even_group_calculate_average(collection_c);
console.log(result);
module.exports = even_group_calculate_average;
