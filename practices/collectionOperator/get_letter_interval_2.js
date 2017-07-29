'use strict';

function get_letter_interval_2(number_a, number_b) {
    let arr = [];
    if (number_a < number_b) {
        for (let i = number_a; i <= number_b; i++) {
            arr.push(parseInt(i));
        }
    } else if (number_a > number_b) {
        for (let i = number_a; i >= number_b; i--) {
            arr.push(parseInt(i));
        }
    } else {
        arr.push(parseInt(number_a));
    }
    return arr.map(returnAlphabetStr);
}

var returnAlphabetStr = (elem) => {
    let alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'];
    let index;
    if (elem % 26 === 0) {
        index = elem / 26 - 1;
        return alphabet[index] + alphabet[26];
    } else {
        index = Math.floor(elem / 26);
        return alphabet[index] + alphabet[elem % 26];
    }
}


module.exports = get_letter_interval_2;

