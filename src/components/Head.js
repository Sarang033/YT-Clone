import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const[suggestions,setSuggestions]= useState([]);
  const[showSuggestions,setShowSuggestions]= useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch= useDispatch();

  useEffect(() => {
    //API call
    console.log(searchQuery);
    //make an API call on every key press
    //but if the diff between 2 API calls is <200ms
    //Decline the API call

    const timer = setTimeout(() => { 
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
      getSearchSuggestions()}
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);

    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
        />
        <a href="/">
          <img
            className="h-8 mx-3"
            alt="yt-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-1.5 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />
          <button className=" border border-gray-400 p-1.5 rounded-r-full">
            Search
          </button>
        </div>
        {showSuggestions && (
        <div className="absolute bg-white py-2 px-2 w-[29rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {suggestions.map((s)=>(
            <li
            key={s} 
            className=" py-1 px-3 shadow-sm hover:bg-gray-100">
            🔍 {s}
            </li>
            ))}
          </ul>
        </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-7"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavCDvlRFf6Y1gcbHAoYvLDWSjR6GFpI1sYErd3F8&s"
        />
      </div>
    </div>
  );
};

export default Head;
