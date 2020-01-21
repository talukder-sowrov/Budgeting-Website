define(function() {
    'use strict';
    
    function Income(information) {
        this.typeOfIncome = information[0];
        this.incomeMade = information[1];
        this.investmentIncomeMade = information[2];
    };
    
    return Income;
});