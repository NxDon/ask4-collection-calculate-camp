'use strict';

function get_letter_interval(number_a, number_b) {
    let arr = [];
    if (number_a < number_b) {
        for (let i = number_a; i <= number_b; i++) {
            arr.push(parseInt(i) + 96);//+96原因是97 = 'a'
        }
    } else if (number_a > number_b) {
        for (let i = number_a; i >= number_b; i--) {
            arr.push(parseInt(i) + 96);
        }
    } else {
        arr.push(parseInt(number_a) + 96);
    }
    return arr.map(function (elem) {
        return String.fromCharCode(elem)
    });
}


module.exports = get_letter_interval;
