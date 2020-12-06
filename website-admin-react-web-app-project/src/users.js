import React from 'react';
import {List, Datagrid, TextField, EmailField, UrlField,Edit, SimpleForm, TextInput,Create } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <EmailField source="email" />
            <TextField source="gender" />
            <UrlField source="ip_address" />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <TextInput source="email" />
        <TextInput source="gender" />
        <TextInput source="ip_address" />
      </SimpleForm>
    </Edit>
);


export const UserCreate = props => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <TextInput source="email" />
        <TextInput source="gender" />
        <TextInput source="ip_address" />
      </SimpleForm>
    </Create>
  );

