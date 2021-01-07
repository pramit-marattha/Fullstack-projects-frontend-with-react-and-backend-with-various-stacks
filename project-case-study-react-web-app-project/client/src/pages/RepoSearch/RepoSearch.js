import React,{useState} from 'react';
import axios from "axios";

import SearchForm from '../../components/SearchForm';
import CardItemList from "../../components/CardItemList";

import "./RepoSearch.css";


const RepoSearch = () => {
    const [repos,setRepos] = useState([]);

    const searchRepository = (searchQuery) => {
        setRepos([]);
        axios.get(`https://api.github.com/search/repositories?q=${searchQuery}{&page,per_page,sort,order}`)
          .then(result => setRepos(result.data.items))
      }

    return (
        <div className="container__RepoSearch">
         <SearchForm
          placeholder="Search Projects."
          buttonText="Search"
          onSubmit={value => searchRepository(value)}
        />
        <CardItemList items={repos} />
        </div>
    );
};

export default RepoSearch;
