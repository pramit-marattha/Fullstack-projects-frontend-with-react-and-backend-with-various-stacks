import React,{useState} from 'react';
import "./SearchForm.css";

const SearchForm = (props) => {

    const [value,setValue]= useState('');

     const submitSearchValue=()=> {
        setValue('');
        props.onSubmit(value)
      }


    return (
        <div>
        <input className="search-input" type="text" placeholder={props.placeholder} value={value}
          onChange={event => setValue(event.target.value)}
        />
        <label htmlFor="name" className="search-label">Search Project</label>
        <button className="search-button" type="submit" onClick={() => submitSearchValue()}>
          {props.buttonText}
        </button>
        </div>
    )
}

export default SearchForm;
