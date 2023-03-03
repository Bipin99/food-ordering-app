import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./Constant";
import "../app.css";
function Body() {
  const[text,setText]=useState("");
  const clickHandler=()=>{
    
  }
  return (
    <>
    <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
    <button onClick={clickHandler}>Search</button>
      <div className="restaurant">
        {restaurantList.map((element) => (
          <RestaurantCard {...element.data.data} />
        ))}
      </div>
    </>
  );
}

export default Body;
