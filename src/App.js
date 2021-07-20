import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./app.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    
    <NewsContextProvider>
      <NavBar></NavBar>
      <News />
    </NewsContextProvider>
    
  );
}

export default App;
