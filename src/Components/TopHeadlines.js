import React, { useState, useEffect } from "react";
import { useRef } from "react";
import "../Styles/TopHeadlines.css";
import Card from "./Card";

function TopHeadlines(props) {
  let cat = props.category;
  props.setCategory(cat);

  const [articles, setArticles] = useState([]);
  const [results, setResults] = useState(1);
  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=c4b19d6b31654792ac223a7b5fd02e0b&q=${props.keyword}`;
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setResults(parsedData.totalResults);
    props.setProgress(100);
  };

  if (props.search === true) {
    updateNews();
    props.setSearch(false);
  }

  useEffect(() => {
    updateNews();
  }, []);

  const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <div className="container-heading m-5 px-4">
        <h2 className=" heading-Headline">{capitalizeFirst(props.category)}</h2>
      </div>
      <div className="container">
        <div className="row">
          {articles.map((ele) => {
            if (results !== "0") {
              return (
                <>
                  <div className="col-md-3 my-3" key={ele.url}>
                    <Card
                      title={ele.title}
                      image={ele.urlToImage}
                      url={ele.url}
                    />
                  </div>
                </>
              );
            } else {
              return <h2>Nothing to show here</h2>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default TopHeadlines;
