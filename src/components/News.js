import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <h1 className="head_text">New York Times App</h1>
    <div className="all__news">
      {data ? data.results.map(news =><NewsArticle data={news} key={news.url}/>) : "Loading...."}
      </div>
    </div>
  );
}
      
export default News;
