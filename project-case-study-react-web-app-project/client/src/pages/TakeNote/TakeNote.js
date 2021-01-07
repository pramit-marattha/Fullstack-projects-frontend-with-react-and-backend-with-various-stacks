import React,{useState,useEffect} from 'react';
import axios from "axios";
import "./TakeNote.css";

const TakeNote = () => {
    const [notes,setNotes] = useState([]);
    const [items,setItems] = useState("");




    const changeHandler = (e) => {
        setItems(e.target.value);
    }

    const clickHandler = async (e) => {
        // e.preventDefault()
        axios({
            method: 'post',
            url: process.env.REACT_APP_SERVER_API_URL,
            data: {
              note: items,
            }
          }).then(()=>{
            setItems("");
          }).then(()=>{
            window.location.reload(false);
          })
    };

    
    useEffect(()=>{
        axios.get(process.env.REACT_APP_SERVER_API_URL).then((response) => {
            let data = [];
            for(var i =0; i < response.data.data.length; i++){
                data.push(response.data.data[i].note)
            }
            setNotes(data);
        });
    },[])

    

    return (
        <div className="conatiner__back">
                <input className="todo-input"  placeholder="Organize and keep track of newly explored awesome projects."  type="text" onChange={changeHandler}/>
                <button className="todo-button" type="submit" onClick={clickHandler}>➕ Add Notes</button>
                <small style={{color:"white",fontSize:"10px"}}>* all notes will get stored inside MongoDB</small>
                <div className="notes__layout">
                    <ol className="gradient-list">{notes.map((note) => <li key={note._id}>{note}</li>)}</ol>
                </div>
        </div>
    )
}

export default TakeNote;
