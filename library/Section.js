define(function() {
    'use strict';
    
    var IncomeSection = [
        "Income Type: ",
        "Monthly Income: ",
        "Monthly Investment Income: "
    ]

    var SavingsSection = [
        "Savings in Bank: ",
        "Income Sent: ",
    ]

    var ExpendituresSection = [
        "Expenditures Type: ",
        "Cost of Necessities: "
    ]

    var Section = {
        "Income": IncomeSection,
        "Savings": SavingsSection,
        "Expenditures": ExpendituresSection
    }

    return Section;
});