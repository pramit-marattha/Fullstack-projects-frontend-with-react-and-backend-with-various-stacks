import React,{useState,useEffect} from 'react';
import GoalInput from '../GoalInput';
import GoalList from '../GoalList';
import axios from "axios";
import TrackChangesIcon from '@material-ui/icons/TrackChanges';

const GoalManager = () => {
    const [goals,setGoals] = useState([]);

    const apiURL= process.env.REACT_APP_API 


    useEffect(()=>{
        getGoals();
    },[])

    const getGoals=()=>{
        axios.get(`${apiURL}/api/goals`).then(res => {
        if(res.data){
          setGoals(res.data)
        }
      }).catch(err => console.log(err))
    }

    const deleteGoals = (id) => {
        axios.delete(`${apiURL}/api/goals/${id}`).then(res => {
            if(res.data){
              getGoals();
            }
          }).catch(err => console.log(err))
      }
    
    return (
        <div>
         <h1 style={{color:"black"}}><TrackChangesIcon/> Goal Manager</h1>
        <GoalInput getGoals={getGoals}/>
        <GoalList goals={goals} deleteGoals={deleteGoals}/>
        </div>
    )
}

export default GoalManager;
