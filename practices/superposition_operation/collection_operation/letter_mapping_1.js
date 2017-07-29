'use strict';

function even_to_letter(collection) {
    //可以使用 String.fromCharCode() 或者建立字母表的方式，这里选择建立字母表
    var alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var evenArr = collection.filter((elem) => {
        return elem % 2 === 0;
    });
    return evenArr.map((elem) => {
        return alphabet[elem];
    });
}

module.exports = even_to_letter;
