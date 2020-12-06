import React,{useState,useEffect} from 'react';
import './styles/App.css';
import Header from "./components/Header"
import BudgetForm from "./components/BudgetForm"
import BudgetList from "./components/BudgetList"
import BudgetCalculator from "./components/BudgetCalculator"

function App() {
  const [budget, setBudget]= useState([]);
  const [totalBudget,setTotalBudget]= useState(0);


  useEffect(()=>{
    let temp =0
    for(let i=0; i<budget.length; i++){
      temp +=parseInt(budget[i].price)
    }
    setTotalBudget(temp); 
  },[budget])

 


  return (
    <>
    
    <Header />

    <BudgetForm budget={budget} setBudget={setBudget} />

    <BudgetList budget={budget} setBudget={setBudget}/>

    <BudgetCalculator totalBudget={totalBudget}/>
    </>
  );
}

export default App;
