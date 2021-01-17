import React,{useState} from 'react';
import axios from 'axios';

const User = () => {
    const [username,setUsername] = useState('');
    const onChangeUsername=(event)=> {
      setUsername(event.target.value)
  }

  const onSubmit=(event)=> {
    event.preventDefault();
    const user = {username}
    axios.post(`${process.env.REACT_APP_SERVER_URL}/users/add`, user).then(res => console.log(res.data));
        setUsername("");
  }

    return (
        <div className="containerform">
        <h3>Add New User</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={username}
                onChange={onChangeUsername}
                />
          </div>
          <div className="form-group text-center">
            <input type="submit" value="➕ Add User" className="btn btn-info pt-4 pb-4 pr-4 pl-4" />
          </div>
        </form>
        </div>
    )
}

export default User;
