function collect_same_elements(collection_a, collection_b) {
    return collection_a.filter((elem) => {
        return collection_b.indexOf(elem) >= 0;
    });
}

module.exports = collect_same_elements;
