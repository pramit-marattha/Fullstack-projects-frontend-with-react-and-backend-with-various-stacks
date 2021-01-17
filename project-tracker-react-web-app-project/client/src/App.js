import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/Navbar"
import ProjectList from "./components/ProjectLists";
import EditProjects from "./components/EditProjects";
import Projects from "./components/Projects";
import CreateUser from "./components/User";

const App=()=> {
  return (
    <>
    <Router>
    <Navbar/>
      <div className="container">
      <br/>
      <Route path="/" exact component={ProjectList} />
      <Route path="/edit/:id" component={EditProjects} />
      <Route path="/create" component={Projects} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
    </>
  );
}

export default App;
