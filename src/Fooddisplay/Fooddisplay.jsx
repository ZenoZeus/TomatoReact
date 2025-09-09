import React, { useContext } from 'react';
// import StoreContextProvider from "../context/StoreContext.jsx";
import Fooditem from "../Fooditem/Fooditem.jsx"
import { food_list } from '../assets/frontend_assets/assets.js';
import "./Fooddisplay.css"


const Fooddisplay = ({bag,setbag,category}) => {

  // const food_list = useContext(StoreContextProvider);

  return (
    <div>

        <div className="food-display">
            <h2>Top dishes</h2>
            <div className="fdr">
              <div className="fooddisplaylist">
              {
                food_list.map((ele,i)=>
                {
                  return <Fooditem bag={bag} setbag={setbag} key={i} id={ele._id} 
                  name={ele.name}
                  description={ele.description}
                  price={ele.price}
                  image={ele.image}/>
                })
              }
            </div>
            </div>
        </div>
    </div>
  )
}

export default Fooddisplay