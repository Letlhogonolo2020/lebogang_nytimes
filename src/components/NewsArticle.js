import React from "react";

function NewsArticle({ data }) {
  return (
    
    <div className="news">
      <h1 className="news_title">{data.title}</h1>
      <hr></hr>
      <p className="news_desc">{data.abstract}</p>
      <span className="news_author">{data.byline}</span><br/>
      <span className="news_published">{data.published_date}</span><br/>
      
      <a href= {data.url} target="_blank">Read more</a>
      
      </div>
     
  );
}

export default NewsArticle;
