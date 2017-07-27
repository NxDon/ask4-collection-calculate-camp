'use strict';

function get_integer_interval(number_a, number_b) {

    if(number_a < number_b){
        return get_interval_arr(number_a,number_b);
    }else if (number_a > number_b){
        return get_interval_arr(number_b,number_a).reverse();
    }
    return [number_a];

}

function get_interval_arr(a,b) {
    var arr = [];
    for(var i = a; i <= b; i++){
        arr.push(i);
    }
    return arr;

}

module.exports = get_integer_interval;

