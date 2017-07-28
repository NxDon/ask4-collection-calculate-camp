'use strict';

function spilt_to_zero(number, interval) {
    //检测interval位数
    var precision = interval.toString().split('.')[1].length;
    var arr = [number];
    number *= Math.pow(10,precision);
    interval *= Math.pow(10,precision);


    for(var i = number; i >0; i -= interval){
        arr.push((i - interval) / Math.pow(10,precision));
    }
    return arr;

}
var result = spilt_to_zero(0.8, 0.2);
console.log(result);

module.exports = spilt_to_zero;
