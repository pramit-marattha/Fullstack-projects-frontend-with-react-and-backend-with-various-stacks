import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import {createLogEntries} from '../../api/API';
import "./TripEntryForm.css";

const TripEntryForm = ({location,onClose}) => {
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) =>{
        try {
            setLoading(true);
            data.latitude =location.latitude;
            data.longitude =location.longitude;
            const created = await createLogEntries(data);
            console.log(created)
            onClose();
        }catch (error)
        {
        setError(error.message);
        console.error(error);
        setLoading(false);
        }
       
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className= "trip-form">
        {error ? <h3 className="error-message">{error}</h3> : null}
        <label htmlFor="api_key">Enter Password</label>
      <input type="password" name="api_key" placeholder="For demo, password => {roadtripmap} " required ref={register} />

        <label htmlFor="title">Title</label>
      <input name="title" placeholder="Title" required ref={register} />

      <label htmlFor="comments">Comments</label>
      <textarea name="comments" placeholder="Comments" rows={3} ref={register}></textarea>

      <label htmlFor="description">Description</label>
      <textarea name="description" placeholder="Describe your journey" rows={4} ref={register}></textarea>

      <label htmlFor="image">Image</label>
      <input name="image" placeholder="Image URL" ref={register} />

      <label htmlFor="rating">Rating (1 - 10)</label>
      <input name="rating" type="number" min="0" max="10" ref={register} />

      <label htmlFor="visitDate">Visit Date</label>
      <input name="visitDate" type="date" required ref={register} />

    <button disabled={loading}><span>{loading ? "Submitting..." : "Submit your Trip"}</span></button>
    </form>
    )
}

export default TripEntryForm;
