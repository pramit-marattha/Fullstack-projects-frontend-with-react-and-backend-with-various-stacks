import React,{useState} from 'react';
import WikiSearchResults from "./components/WikiSearchResults";
import "./styles/App.css";

function App() {
  const [wikiSearch,setWikiSearch] = useState("");
  const [searchName,setSearchName] = useState([]);
  const [searchLinks,setSearchLinks] = useState([]);

 async function btnSearch(){
  const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${wikiSearch}&format=json&origin=*`;
  const response = await fetch(url);
  const jsonResponse = await response.json();
  // console.log(JSON.stringify(jsonResponse, null , 3));
  // console.log(jsonResponse);
  setSearchName(jsonResponse[1]);
  setSearchLinks(jsonResponse[3]);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="searchBo">
          <h1 className="ws-search">Fan Wiki Search</h1>
          <input className="searchBox" value={wikiSearch} onChange={e => setWikiSearch(e.target.value)} placeholder="Search anything...." />
          <button className="btn draw-border" onClick={btnSearch}>Search</button>
          {searchName.map((value, i) => <WikiSearchResults name={value} link={searchLinks[i]} key={i + value} />)}
        </div>
      </div>
    </div>
  )
}

export default App
