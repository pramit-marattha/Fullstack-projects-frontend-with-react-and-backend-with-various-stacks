import React,{useRef} from 'react'

function BudgetForm({budget,setBudget}) {

    const description = useRef(null);
    const date = useRef(null);
    const price = useRef(null);

    const AddBudget = (e)=>{
e.preventDefault();
let d = date.current.value.split("-");
let newDate = new Date(d[0],d[1],d[2]);

setBudget([...budget,{
    "description": description.current.value,
    "price":price.current.value,
    "date": newDate.getTime()
}])

description.current.value="";
price.current.value=null;
date.current.value=null;
    }


    return (
        <form className="budget-form" onSubmit={AddBudget}>
            <div className="form-inner">
                <input type="text" name="desc" id="desc" placeholder="Item Details" ref={description}/>
                <input type="number" name="price" id="price" placeholder="price" ref={price}/>
                <input type="date" name="date" id="date" placeholder="Select a date" ref={date}/>
                <input type="submit" value="ADD Budget"/>
            </div>
        </form>
    )
}

export default BudgetForm
