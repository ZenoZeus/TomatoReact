import React, { useState } from 'react'
import Header from "../Header/page.jsx"
import Exploremenu from "../Exploremenu/page.jsx"
import Fooddisplay from "../Fooddisplay/Fooddisplay.jsx"
import Footer from '../Footer/Footer.jsx'
const Page = ({bag,setbag}) => {
  const [category, setcategory] = useState("all")

  return (
    <>
    <Header/>
    <Exploremenu bag={bag} setbag={setbag} category={category} setcategory={setcategory}/>
    <Fooddisplay bag={bag} setbag={setbag} category={category} setcategory={setcategory}/>
    <Footer/>
    </>
  )
}

export default Page