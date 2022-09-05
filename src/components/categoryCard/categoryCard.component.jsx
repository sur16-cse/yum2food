import React from 'react'
import Card from '../card/card.component'
import './categoryCard.styles.css'
import { useState } from 'react'
const CategoryCardlist = ({categories})=>{
  // const [pageNo, setPageNo] = useState(1);
  //   const [pageATaTime,setPageAtaTime]=useState(15)
  // window.onscroll=()=>{
  //   if(window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight){
  //     setPageNo(pageNo+1)
  //     setPageAtaTime(pageATaTime+10);
  //   }
  // }
  // pageNo={pageNo}

  return(
    <div className="card-list">
      {categories && categories.map((category,id)=>{
        //console.log(pageATaTime)
         return  <Card category={category} key={id}/>
      })}
  </div> 
  ) 
    }     

export default CategoryCardlist