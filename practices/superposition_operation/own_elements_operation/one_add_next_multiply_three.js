'use strict';
function one_add_next_multiply_three(collection){
    var result = [];
    collection.forEach((elem,index,array) => {
        if(array[index+1] != undefined){//不是最后一个元素
            result.push((elem + array[index + 1]) * 3);
        }
    })
    return result;
}
module.exports = one_add_next_multiply_three;
