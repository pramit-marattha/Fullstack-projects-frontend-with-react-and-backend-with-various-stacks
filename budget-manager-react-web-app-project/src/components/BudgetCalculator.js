import React from 'react';


function BudgetCalculator({totalBudget}) {
    return (
        <>
        <div className="total-budget">Total $.{totalBudget}</div>
        </>
    )
}

export default BudgetCalculator
