define(['jquery'], function($) {
    
    $(document).ready(function() {
    
        var removeButton = $(".remove");

        removeButton.on('click', function() {

            let string = $('#budgetInfo').val();

            string = string.split('\n');

            string.pop();
            string.pop();

            let newString = '';
            for(var index of string) {
                newString = newString.concat(index + '\n');
                console.log(newString);
            }

            $('#budgetInfo').text(newString);
            
        })
    
    });
});