define(['jquery','./PackageId.js', './DataObject.js', './DisplayData.js'], 
    function($, PackageId, DataObject, DisplayData) {
    
    $(document).ready(function() {
    
        function getData(inputId) {
            let budgetData = [];
    
            for(id in inputId) {
                let dataId = '#' + inputId[id];

                let classMember = $(dataId).val();

                if( Number.isNaN(Number(classMember)) ) {
                    budgetData.push(classMember);
                } else {
                    budgetData.push(Number(classMember));
                }
                
                $(dataId).val('');
            }
            
            return budgetData;
        }
        
        var sendButton = $('.submit');
    
        sendButton.on('click', function() {

            let section = $("#typeSelect").val();
            let inputId = PackageId(section);
            
            let data = getData(inputId);
    
            let budgetObject = DataObject(data, section);

            DisplayData(budgetObject);

        });
    
    });
});