import React, { useState } from 'react'
import { food_list } from '../assets/frontend_assets/assets'
import "./Cart.css"

const Cart = ({bag,setbag}) => {
   let op =()=>{console.log(bag)}
   const [sum, setsum] = useState(0)
  return (
      <>
      <h1>Items:</h1>
      <div className="cart">
        <div className="cart-item">
            {
              
                food_list.map((ele,i)=>{
                    if(bag.includes(ele._id))
                    {
                        return (
                            <>

                            <div className="cart-item-main">

                            <div className="cart-item-image">
                                <img src={ele.image} alt="" />
                            </div>
                            
                            <div className="cart-item-info-main">
                            <div className="cart-item-title">Item: {ele.name}</div>
                            <div className="cart-item-price">Price: {ele.price}</div>
                            <div className="cart-item-quantity">Quantity: {bag.filter(item=>item===ele._id).length}</div>
                            <div className="cart-item-subtotal">Sub-total: Rs. {eval((bag.filter(item=>item===ele._id).length)*ele.price)}</div>
                            </div>
                            </div>
                            
                            <br />
                            </>
                        )
                    }
                })
            }
        </div>
        <div className="Total-Price-Main">
        {(() => {
            let total = 0;

            food_list.forEach((ele) => {
            const quantity = bag.filter((item) => item === ele._id).length;
            total += quantity * ele.price;
            });

            return <><span className="Total-Price">Total-Price: Rs. {total}</span> <span ><button className='Pay'>Pay</button></span> <br /><span className="Total-Price">Thank You For Shopping</span></>;
        })()}
</div>

      </div>
    </>
  )
}

export default Cart