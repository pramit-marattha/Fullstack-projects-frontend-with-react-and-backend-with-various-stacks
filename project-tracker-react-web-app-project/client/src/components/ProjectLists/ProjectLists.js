import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./ProjectLists.css";

const Project = props => (
  <tr>
    <td >To:<div className="fontanim" style={{"text-align": "justify","text-justify": "inter-word"}}> {props.projectlst.username.toUpperCase()}</div></td>
    <td><p style={{"text-align": "justify","text-justify": "inter-word"}}>{props.projectlst.description}</p></td>
    <td style={{"text-align": "justify","text-justify": "inter-word"}}><div className="fontanim">{props.projectlst.duration} days</div> </td>
    <td style={{"text-align": "justify","text-justify": "inter-word"}}>{(new Date(props.projectlst.date)).toLocaleDateString("en-US",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</td>
    <td>
      <Link to={"/edit/"+props.projectlst._id}><button className="btn btn-info pt-3 pb-3 pr-4">🖊️ Edit</button></Link> <br/><div><br/></div> <button className="btn btn-danger pt-3 pb-3" href="#" onClick={() => { props.deleteProjects(props.projectlst._id) }}>🗑️ Delete</button>
    </td>
  </tr>
);

const ProjectLists = () => {
    const [projects,setProjects] = useState([]);

    useEffect(()=> {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/projects/`).then(response => {
            setProjects(response.data)})
          .catch((error) => {
            console.log(error);
          })
      });
    
      const deleteProjects=(id)=> {
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/projects/`+id).then(response => { console.log(response.data)});
        setProjects(projects.filter(el => el._id !== id))
      }
    
      const projectList=()=> {
        return projects.map(currentproject => {
          return <Project projectlst={currentproject} deleteProjects={deleteProjects} key={currentproject._id}/>;
        })
      }
    
    return (
      <>
        <h3 className="text-center">Projects:</h3>
        <div className="tablelong">
        <table className="table table-dark table-hover">
          <thead className="thead-dark">
            <tr className="tr-dark">
              <th className="bg-info">Assigned</th>
              <th className="bg-success">Project Description:</th>
              <th className="bg-warning"><div>Deadline:</div></th>
              <th className="bg-primary text-center ml-2">Submission Date:</th>
              <th className="bg-primary pl-3"></th>
            </tr>
          </thead>
          <tbody>
            {projectList()}
          </tbody>
        </table>
      </div>
      </>
    )
}

export default ProjectLists;
