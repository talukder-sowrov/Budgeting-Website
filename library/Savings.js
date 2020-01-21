define(function() {
    'use strict';
    
    function Savings(information) {
        this.savingsInBank = information[0];
        this.savingsSent = information[1];
    };

    return Savings;
});