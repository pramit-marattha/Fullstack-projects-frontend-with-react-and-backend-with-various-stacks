import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import  { UserList, UserEdit, UserCreate }  from './users';
import authProvider from "./authProvider";
import jsonServerProvider from "ra-data-json-server";

const dataProvider =
  // jsonServerProvider("https://jsonplaceholder.typicode.com");
  jsonServerProvider("https://my-json-server.typicode.com/pramit-marattha/Admin-dashboard-json-server");

class App extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
    </Admin>
    );
  }
}
export default App;



