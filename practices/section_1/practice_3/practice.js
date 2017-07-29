function collect_same_elements(collection_a, object_b) {
    return collection_a.filter((elem) => {
        return object_b.value.indexOf(elem) >= 0;
    })
}

module.exports = collect_same_elements;
