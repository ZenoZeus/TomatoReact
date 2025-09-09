import React from 'react'
import "./Exploremenu.css"
import { menu_list } from '../assets/frontend_assets/assets'
const page = ({category,setcategory}) => {
  return (
    <>
    <div className="explrmn" id="explrmn">
    <h1>Explore Menu</h1>
    <p className='explrmntext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est at harum tempora ducimus hic accusantium voluptas nam sint alias?</p>
    <div className="explrmnlist">
        {
            menu_list.map((ele,i)=>
            {
                return(
                <div onClick={()=>setcategory(prev=>prev===ele.menu_name?"all":ele.menu_name)} key={i} className='explrmnlist-item'>
                    <img className={category===ele.menu_name?"active":""} src={ele.menu_image} alt="" />
                    <p className='explrmnlistname'>{ele.menu_name}</p>
                </div>
                );
            }
            )
        }
    </div>
    </div>
    </>
)
}

export default page