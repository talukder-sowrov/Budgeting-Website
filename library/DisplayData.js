define(['jquery', './Section.js'], function($, Section) {
    'use strict';
    
    function DisplayData(data) {

        const values = Object.values(data);
        const nameOfClass = data.constructor.name;
        let titles;

        for(var key in Section) {
            if (nameOfClass == key) {
                titles = Section[key];
                break;
            }
        }

        let string = '';

        for(const [index, element] of titles.entries()) {

            string = string.concat(element + values[index]);

            if (index != titles.length - 1){
                string = string.concat(' || ');
            }
            
        }

        $('#budgetInfo').append(string + '\n');
    }

    return DisplayData;
});