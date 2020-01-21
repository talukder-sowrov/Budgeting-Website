define(['./dictOfTypes.js'], function(dictOfTypes) {

    function DataObject(data, type) {
        let budgetObject;
        for(key in dictOfTypes) {
            if(type == key) {
                let createObject = dictOfTypes[key];
                budgetObject = new createObject(data);
                break;
            }
        }
    
        return budgetObject;
    }

    return DataObject;
});