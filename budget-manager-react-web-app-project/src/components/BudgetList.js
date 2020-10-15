import React from 'react'
import BudgetItem from "./BudgetItem"

function BudgetList({budget,setBudget}) {

    const removeBudget = i =>{
        let temp = budget.filter((v,index)=>index !== i );
        setBudget(temp);
    }

    const sortByDate = (a,b) =>{
        return a.date - b.date
    }

    return (
        <div className="budget-list">
            {
                budget.sort(sortByDate).map((value,index)=>(
                    <BudgetItem key={index} budget={value} index={index} removeBudget={removeBudget}/>
                ))
            }
        </div>
    )
}

export default BudgetList
