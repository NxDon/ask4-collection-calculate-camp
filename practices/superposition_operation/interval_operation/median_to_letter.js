'use strict';

function median_to_letter(collection) {
    var alphbet = ['','a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p', 'q','r','s','t','u','v','w','x','y','z'];
    var index = Math.ceil(compute_median(collection));
    var ans = get_letter_interval_2(index,index);
    return ans[0];
}


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


var collection = [20,21,22,23,24,25,26,27,28,29,
    30,31,32,33,34,35,36,37,38,39,
    40,41,42,43,44,45,46,47,48,49,
    50,51,52,53];

var result = median_to_letter(collection);

module.exports = median_to_letter;
