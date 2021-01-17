import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import "./Navbar.css";

const Navbar = () => {
  const [username,setUsername] = useState('');
  const onChangeUsername=(event)=> {
    setUsername(event.target.value)
};

const onSubmit=(event)=> {
  const user = {username}
  axios.post(`${process.env.REACT_APP_SERVER_URL}/users/add`, user).then(res => console.log(res.data));
      setUsername("");
}
    return (
        <div className="container">
        <div className="navheader">
        <nav className="navbar navbar-dark bg-info navbar-expand-lg">
        <Link to="/" className="navbar-brand"><img style={{height:50}} src="https://image.flaticon.com/icons/png/512/1087/1087815.png" alt="projectTracker" />ProjectTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto ">
          <li className="navbar-item">
          <Link to="/" className="nav-link"><button className="btn btn-success">📜 All Projects</button></Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link"><button className="btn btn-success">➕ Create / Track projects</button></Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link"><button className="btn btn-success">➕ Assign User</button></Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0"  onSubmit={onSubmit}>
      <input className="form-control mr-sm-2" type="text" placeholder="Add new member" aria-label="Search" value={username} onChange={onChangeUsername}/>
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Create</button>
      </form>
        </div>
      </nav>
      </div>
        </div>
    )
}

export default Navbar;
