function create_updated_collection(collection_a, object_b) {
    var objArrA = countSameElements(collection_a);
    var collection= [];
    var arrB = object_b.value;//['a','b','c']
    for(var obj in objArrA){
        if(arrB.indexOf(objArrA[obj].key) >= 0){//是需要满三减一的行

            collection.push({
                key:objArrA[obj].key,
                count:objArrA[obj].count-Math.floor(objArrA[obj].count/3)
            })

        }else{
            collection.push({
                key:objArrA[obj].key,
                count:objArrA[obj].count
            })
        }
    }
    return collection;

    function countSameElements(collection) {
        var objArr = [];
        collection.map(function (elem){
            for(var i = 0; i < objArr.length; i++){
                if(elem == objArr[i].key){
                    objArr[i].count += 1;
                    return;
                }
            }
            objArr[objArr.length]= {
                key:elem,
                count:1
            }
        })

        return objArr;
    }
}

module.exports = create_updated_collection;
