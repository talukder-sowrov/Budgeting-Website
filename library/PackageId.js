define(['./DictOfId.js'], function(dictOfId) {

    function PackageId(string) {
        let inputData = [];
    
        for(var key in dictOfId) {
            if(string == key) {
                let dataType = dictOfId[key];
                for(var id in dataType) {
                    inputData.push(dataType[id]);
                }
            }
        }
        return inputData;
    }
    
    return PackageId;
});