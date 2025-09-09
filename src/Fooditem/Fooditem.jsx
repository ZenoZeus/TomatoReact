import React, { useState } from 'react'
import "./Fooditem.css"
import { assets } from '../assets/frontend_assets/assets'

const Fooditem = ({id,name,price,description,image,bag,setbag}) => {
  const [countItem, setcountItem] = useState(0)


  return (
   <>
   <div className="food-item">
      <div className="food-item-container">
      <div className="item-rating">
      <span>Rating</span>
      <img src={assets.rating_starts} alt="" className="item-stars" />
      </div>
      <img src={image} alt="" className="food-item-image" />
      </div>
      <div className="food-item-info">
          <p >{name}</p>
        <div className="food-item-description">{description}</div>
        <span className="food-item-price">Rs.{price}</span>
        <span className="item-count">
          <button onClick={()=>{
            if(bag.includes(id))
            {
              const idx = bag.indexOf(id);
              
              setbag(bag => {
              const newBag = [...bag];
              newBag.splice(idx, 1); // remove 1 item at idx
              return newBag; // return the updated array, not splice result
});

            }
            
          }}>-</button>
          <span className="food-item-count">{bag.filter(item => item === id).length}
</span>
          <button onClick={()=>{
            if(countItem<100)
            {
              setcountItem(countItem+1);
              setbag(bag=>[...bag, id]);
              console.log(bag)
            }

          }}>+</button>
        </span>
      </div>
   </div>
   </>
  )
}

export default Fooditem