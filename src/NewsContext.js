import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "9329673be6c245e79782fcbac35a473f";

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=R4C4DLiQY667tVk5rz3quQjEzAeFDmXu`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
//https://newsapi.org/v2/everything?q=tesla&from=2021-06-19&sortBy=publishedAt&apiKey=9329673be6c245e79782fcbac35a473f
//https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=R4C4DLiQY667tVk5rz3quQjEzAeFDmXu