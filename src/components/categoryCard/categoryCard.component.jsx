import React from 'react'
import Card from '../card/card.component'
import './categoryCard.styles.css'
import { useState } from 'react'
const CategoryCardlist = ({categories})=>{
  const [pageNo, setPageNo] = useState(1);
    const [pageATaTime,setPageAtaTime]=useState(10)
  window.onload = () => {
    setPageNo(0);
  }

  return(
    <div className="card-list">
      {categories && categories.slice(setPageAtaTime).map((category,id)=>{
        //console.log(pageATaTime)
         return  <Card category={category} key={id} pageNo={pageNo}/>
      })}
  </div> 
  ) 
    }     

export default CategoryCardlist