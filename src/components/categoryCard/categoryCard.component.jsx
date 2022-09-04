import React from 'react'
import Card from '../card/card.component'
import './categoryCard.styles.css'
const CategoryCardlist = ({categories})=>{
  //console.log(categories)
  return(
    <div className="card-list">
      {categories && categories.map((category,id)=>{
         return  <Card category={category} key={id} />
      })}
  </div> 
  ) 
    }     

export default CategoryCardlist