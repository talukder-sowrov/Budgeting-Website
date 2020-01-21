define(['jquery'], function($) {
    $(document).ready(function() {

        $("#typeSelect").on("change", function () {
            let toggleClass = ".toggle";
            var section = $(this).val();
    
            $(toggleClass).hide();
            $("#" + $(this).val()).show();
        });
    
    });   
});
