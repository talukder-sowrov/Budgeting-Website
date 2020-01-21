define(function() {
    'use strict';
    
    function Expenditures(information) {
        this.typeOfExpenditure = information[0];
        this.costOfExpenditure = information[1];
    };

    return Expenditures;
});