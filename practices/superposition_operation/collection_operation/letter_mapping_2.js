'use strict';

function average_to_letter(collection) {
    //可以使用 String.fromCharCode() 或者建立字母表的方式，这里选择建立字母表
    var alphbet = ['','a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p', 'q','r','s','t','u','v','w','x','y','z'];
    var average = collection.reduce((a,b) => {return a+b;}) / collection.length;
    return alphbet[Math.ceil(average)];

}

module.exports = average_to_letter;

