import React from "react";
import Button from "./Button";

const list =["All","Sports","Valorant","Les Twins","Comedy","Marvel","Cars","Computer Science","Music","Anime"]

const Buttonlist = () => {
  return (
    <div className="flex">
    {list.map((name)=>(<button key={name.id} className='px-4 py-1 m-3 bg-gray-200 rounded-lg'>{name}</button>))}
    </div>
  );
};

export default Buttonlist;
