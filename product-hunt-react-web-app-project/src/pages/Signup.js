import React,{useState} from 'react';
import {IonPage,IonContent,IonItem,IonLabel,IonInput,IonRow,IonCol,IonButton, IonLoading} from '@ionic/react';
import NavHeader from "../components/Header/NavHeader";
import {toast} from "../utils/toast";
import useFormValidation from "../Hooks/useFormValidation";
import validateSignup from "../components/Auth/validateSignup";
import firebase from "../firebase";

const INITIAL_STATE ={
    name: "",
    email: "",
    password: ""
};



const Signup = (props) => {
    const {
        handleChange,handleSubmit,values,setValues,loading
    } = useFormValidation(INITIAL_STATE,validateSignup,authenticateUser)

    const [busyloading,setBusyloading]= useState(false);

    async function authenticateUser(){
        setBusyloading(true);
        const {email,password,name} = values;
        try {
            await firebase.register(name,email,password)
            toast("Registered successfully cheers!!");
            props.history.push("/");
        } catch (err){
            console.error("Error Registering the user.. Please try again later!",err)
            toast(err.message)
        }
        setBusyloading(false);
    }

    return (
        <IonPage>
            <NavHeader title="Sign Up"/>
            <IonLoading message={"Loading..Hold up...."} isOpen={busyloading}/>
            <IonContent>
                <IonItem lines="full">
                    <IonLabel position= "floating">Username</IonLabel>
                    <IonInput name="name" type="text" value={values.name} onIonChange={handleChange} required/>
                </IonItem>

                <IonItem lines="full">
                    <IonLabel position= "floating">Email</IonLabel>
                    <IonInput name="email" type="text" value={values.email} onIonChange={handleChange} required/>
                </IonItem>

                <IonItem lines="full">
                    <IonLabel position= "floating">Password</IonLabel>
                    <IonInput name="password" type="password" value={values.password} onIonChange={handleChange} required/>
                </IonItem>

                <IonRow>
                    <IonCol>
                        <IonButton type="submit" color="primary" expand="block" onClick={handleSubmit} disabled={loading}>Register</IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default Signup;
