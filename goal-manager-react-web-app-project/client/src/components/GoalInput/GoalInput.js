import React,{useState} from 'react';
import axios from "axios";
import AddIcon from '@material-ui/icons/Add';
import {Alert,AlertTitle} from '@material-ui/lab';

const GoalInput = (props) => {
    const [action,setAction] = useState("")

    const apiURL= process.env.REACT_APP_API 

     const addGoal = () => {
        const task = {action:action}

        if(task.action && task.action.length > 0){
          axios.post(`${apiURL}/api/goals`, task).then(res => {
              if(res.data){
                props.getGoals();
                setAction("");
              }
            }).then(()=>{
                return (
                    <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    This is a success alert — <strong>check it out!</strong>
                  </Alert>
                )
            }).catch(err => console.log(err))
        }else {
          console.log('input field required')
        }
      }
    
     const handleChange = (event) => {
        setAction(event.target.value)
      }
    
        return (
          <div>
            <input type="text" onChange={handleChange} value={action} />
            <button className="buttonAnim" onClick={addGoal}><AddIcon/> ADD Goal</button>
          </div>
        )
    };

export default GoalInput;
