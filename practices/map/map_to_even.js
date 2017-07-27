'use strict';
function map_to_even(collection){
  return collection.map((elem) => {
      return elem * 2;
  });
}
module.exports = map_to_even;
