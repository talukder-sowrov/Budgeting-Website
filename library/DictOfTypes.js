define(['./Income.js', './Savings.js', './Expenditures.js'], function(Income, Savings, Expenditures) {
    'use strict';
    
    var dictOfTypes = {
        "Income": Income, 
        "Savings": Savings, 
        "Expenditures": Expenditures
    };

    return dictOfTypes;
});