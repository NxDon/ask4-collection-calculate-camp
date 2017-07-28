function collect_same_elements(collection_a, object_b) {
    var arrA = collection_a.map((elem) => {
        return elem.key;
    })
    var arrB = object_b.value;
    return arrA.filter((elem,index,array) => {
        return arrB.indexOf(elem) >= 0;
    })
}

module.exports = collect_same_elements;
