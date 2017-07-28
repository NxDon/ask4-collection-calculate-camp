function collect_same_elements(collection_a, collection_b) {
    collection_b = collection_b.join("").split(",");
    return collection_a.filter((elem,index,array) => {
        return collection_b.indexOf(elem) >= 0;
    })
}

module.exports = collect_same_elements;
