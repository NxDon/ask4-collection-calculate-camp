'use strict';
var number_map_to_word = function(collection){
  return collection.map((elem) => {
      return String.fromCharCode(parseInt(elem) + 96);
  });
};

module.exports = number_map_to_word;
