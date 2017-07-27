'use strict';

function get_letter_interval_2(number_a, number_b) {
    //在这里写入代码
    var alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var arr = [];
    if (number_a < number_b) {
        for (var i = number_a; i <= number_b; i++) {
            arr.push(parseInt(i));
        }
    } else if (number_a > number_b) {
        for (var i = number_a; i >= number_b; i--) {
            arr.push(parseInt(i));
        }
    } else {
        arr.push(parseInt(number_a));
    }

    return arr.map((elem) => {
        let index;
        if (elem % 26 === 0) {
            index = elem / 26 - 1;
            return alphabet[index] + alphabet[26];
        }else{
            index = Math.floor(elem / 26);
            return alphabet[index] + alphabet[elem % 26];
        }
    });
}


var result = get_letter_interval_2(20, 53);
console.log(result);
module.exports = get_letter_interval_2;

