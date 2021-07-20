import React, {useState, useEffect} from 'react'
import "../app.css"
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';



function NavBar(){
    const[showLinks, setShowLinks] = useState(false);
    return(
        <div className="Navbar">
        <div className="leftside">
        <div className="links" id={showLinks ? "hidden" : ""}>
            <a href="https://www.nytimes.com/">Homepage</a>
            <a href="https://www.nytimes.com/section/world">World</a>
            <a href="https://www.nytimes.com/section/business">Business</a>
            <a href="https://www.nytimes.com/section/politics">Politics</a>
            <a href="https://www.nytimes.com/section/ny">N.Y</a>
            <a href="https://www.nytimes.com/section/opinions">Opinion</a>
            <a href="https://www.nytimes.com/section/tech">Tech</a>
            <a href="https://www.nytimes.com/section/science">Science</a>
        </div>
        <button onClick={()=>setShowLinks(!showLinks)}>
            {""}
            <ReorderIcon/>
            </button>
        
        </div>
        <div className="rightside">
        <input type="text" placeholder="Search..."/>
        <button><SearchIcon/></button>
        
               
        </div>
        </div>
    )
}

export default NavBar