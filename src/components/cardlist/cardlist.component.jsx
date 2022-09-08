import { Fragment } from "react"
import './cardlist.styles.css'
import ReceipesButton from "../receipesButton/receipesButton.component"
import {Outlet} from 'react-router-dom'

const CardList=({recipe})=>{
    return(
        <Fragment>
        <Outlet/>
           <div className="cardlist">
                <div className="receipe-image">
                    <img src={recipe.image_url} alt=""/>
                </div>
                <div className="receipe-title">
                    <p>{recipe.title}</p>
                    <p>{recipe.publisher}</p>
                </div>
                <ReceipesButton recipe={recipe}/>
           </div>
        </Fragment>
        )
    
}

export default CardList