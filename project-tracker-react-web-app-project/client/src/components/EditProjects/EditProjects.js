import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const EditProjects = (props) => {
    const [username,setUsername] = useState("");
    const [description,setDescription] = useState("");
    const [duration,setDuration] = useState(0);
    const [date,setDate] = useState(new Date());
    const [users,setUsers] = useState([]);

    const userInputRef = useRef("userInput");


    useEffect(
      ()=> {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/projects/`+props.match.params.id).then(response => {
              setUsername(response.data.username)
              setDescription(response.data.description)
              setDuration(response.data.duration)
              setDate(new Date(response.data.date))  
          }).catch(function (error) {console.log(error)})
        },[props.match.params.id]);

    axios.get(`${process.env.REACT_APP_SERVER_URL}/users/`).then(response => {
      if (response.data.length > 0) {
          setUsers(response.data.map(user => user.username))
      }
    }).catch((error) => {
      console.log(error);
    });


const onChangeUsername= (event)=> {
    setUsername(event.target.value)
}

const onChangeDescription= (event)=> {
    setDescription(event.target.value)
}

const deadlineCalc =((date.getTime() - new Date().getTime())/((1000 * 3600 * 24)) | 0);
    
const onChangeDuration=()=> {
   setDuration(deadlineCalc)
 }

 useEffect(()=>{
   setDuration(deadlineCalc)
 },[deadlineCalc])

const onChangeDate=(date)=> {
    setDate(date)
}

const onSubmit=(event)=> {
  event.preventDefault();

  const proje= {
    username,
    description,
    duration,
    date
  }


  axios.post(`${process.env.REACT_APP_SERVER_URL}/projects/update/` + props.match.params.id, proje)
    .then(res => console.log(res.data));

  window.location = '/';
}
    return (
        <div className="containerform">
           <div>
      <h3>Edit Projects Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group"> 
          <label>Edit whom to assign:: </label>
          <select ref={userInputRef}
              required
              className="form-control"
              value={username}
              onChange={onChangeUsername}>
              {
                  users.map((user)=> {
                   return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Edit Project Description: </label>
          <textarea
              required
              className="form-control"
              value={description}
              onChange={onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Deadline from Today:(auto generated) </label>
          <input 
              type="text" 
              className="form-control"
              value={duration}
              onChange={onChangeDuration}
              style={{"cursor":"not-allowed"}}
              />
        </div>
        <div className="form-group">
          <label>Edit Submission Date:: </label>
          <div>
            <DatePicker
              selected={date}
              onChange={onChangeDate}
            />
          </div>
        </div>
        <div className="form-group text-center">
          <input type="submit" value="💾 Save" className="btn btn-info pt-4 pb-4 pr-4 pl-4" />
        </div>
      </form>
    </div>  
        </div>
    )
};

export default EditProjects;
