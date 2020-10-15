import React from 'react'

function BudgetItem({budget,index,removeBudget}) {
let date = new Date(budget.date);
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

const removeHandle = (i) =>{
    removeBudget(i);

}


    return (
        <div className="budget-item">
            <button className="remove-item" onClick={()=>{removeHandle(index)}}>Delete <span role="img" aria-label="trash">🗑️</span></button>
            <div className="desc">{budget.description}</div>
            <div className="price">$.{budget.price}</div>
            <div className="date">{month + "/" + day + "/" + year + "/"}</div>

        </div>
    )
}

export default BudgetItem
