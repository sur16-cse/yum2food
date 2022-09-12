import React from 'react'
import Card from '../card/card.component'
import './categoryCard.styles.css'
import { useState } from 'react'
const CategoryCardlist = ({categories})=>{
  const [pageNo, setPageNo] = useState(1);
    const [pageATaTime,setPageAtaTime]=useState(10)
  window.onscroll=()=>{
    if(window.onload){
      setPageNo(pageNo+1)
      setPageAtaTime(pageATaTime+5);
    }
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