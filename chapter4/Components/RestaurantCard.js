import React, { useState } from 'react'
import '../app.css'

function RestaurantCard({cuisines,cloudinaryImageId,name,lastMileTravelString}) {

  
 
  return (
    <div className='restaurant-card'>
      

      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + cloudinaryImageId} />
      <h2 className='flow'>{name}</h2>
      <h3 className='flow'>{cuisines.join(", ")}</h3>
      <h4 className='flow'> {lastMileTravelString}</h4>
    </div>
  )
}

export default RestaurantCard