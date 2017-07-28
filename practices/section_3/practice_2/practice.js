function create_updated_collection(collection_a, object_b) {
    var collection= [];
    var arrB = object_b.value;//['a','b','c']
    for(var obj in collection_a){
        if(arrB.indexOf(collection_a[obj].key) >= 0){//是需要满三减一的行

            collection.push({
                key:collection_a[obj].key,
                count:collection_a[obj].count-Math.floor(collection_a[obj].count/3)
            })

        }else{
            collection.push({
                key:collection_a[obj].key,
                count:collection_a[obj].count
            })
        }
    }
    return collection;
}

module.exports = create_updated_collection;
