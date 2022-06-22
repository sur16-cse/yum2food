import {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import {Fragment} from 'react'
const ReceipeDetail=()=>{
    const [recipeDetail,setRecipeDetail]=useState({});
    const location = useLocation()
    const  from  = location.state
    
    console.log(from)
    useEffect(()=>{
     getdetails(from)
    },[from])
    async function getdetails(from){
        const data=await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${from.from}`)
        console.log(data)
        const get=await data.json();
        console.log(get)
        console.log(get.recipe)
        setRecipeDetail(get.recipe);
      } 
    return(
        <Fragment>
            <div className="card-details">
                 <div>
                     <img src={recipeDetail.image_url} alt="details"/>
                </div>
            </div>
        </Fragment>
    )
}

export default ReceipeDetail