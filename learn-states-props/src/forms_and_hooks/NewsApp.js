import React, { useState, useEffect,useRef } from "react";
import News from "./News";
import "./News.css";
import "./NewsApp.css"

function NewsApp() {
  const ApiKey = "d64a4782d0ae4015a79de2bcc670ee3c";
  
  const [newsList, setNewsList] = useState([]);
  const [query,setQuery] = useState('tesla');

  const ApiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-02-04&sortBy=publishedAt&apiKey=${ApiKey}`;

  const queryInputRef = useRef(null)

  useEffect(() => {
    fetchData();
  }, [query]);

  async function fetchData() {
    try {
      const response = await fetch(ApiUrl);
      const jsonData = await response.json();

      setNewsList(jsonData.articles);
    } catch (e) {
      console.log(e, "error occured");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const queryValue = queryInputRef.current.value;
    setQuery(queryValue)
  }

  // here we used map becoz it gives a modified version of array (after filtering)
  return (
    <div className="news-app">

        <h1 style={{fontFamily:'monospace',fontSize:'3rem'}}>Daily News</h1>
        
        <form onSubmit={handleSubmit}>
         <input className="query-input" type="text" ref={queryInputRef}/>
         <input className="btn-submit" onClick={handleSubmit} type="submit" value="Submit"/>
        </form>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,48%)",
        justifyContent: "space-between",
        rowGap: "20px",
      }}
    >
      {newsList.map((news) => {
        return <News key={news.url} news={news} />;
      })}
    </div>
    </div>
  );
}

export default NewsApp;
