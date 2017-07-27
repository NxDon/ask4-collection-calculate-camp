'use strict';
var number_map_to_word_over_26 = function(collection){
    var alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    return collection.map((elem) => {
        let index;
        if (elem % 26 === 0) {
            index = elem / 26 - 1;
            return alphabet[index] + alphabet[26];
        }else{
            index = Math.floor(elem / 26);
            return alphabet[index] + alphabet[elem % 26];
        }
    });
};

module.exports = number_map_to_word_over_26;
