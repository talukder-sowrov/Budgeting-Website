define(function() {
    'use strict';
    
    var IncomeId = [
        "incomeType",
        "monthlyIncome",
        "monthlyInvestmentIncome"
    ]
    
    var SavingsId = [
        "savingsBank",
        "incomeSentFlat"
    ]

    var ExpendituresId = [
        "expendituresType",
        "expendituresInput"
    ]

    var dictOfId = {
        "Income": IncomeId, 
        "Savings": SavingsId, 
        "Expenditures": ExpendituresId
    };

    return dictOfId;
});