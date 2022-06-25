import { Fragment } from "react"
import { Link,Outlet } from 'react-router-dom'
import './receipesButton.styles.css'
const ReceipesButton=({recipe})=>{
    return(
        <Fragment>
            <Outlet/>
            <hr/>
            <div className="receipe-data-button">
                <Link to={`/receipes/${recipe.recipe_id}`} state={{ from: recipe.recipe_id }}>
                    <button>Details</button>
                </Link>
                <button><a href={recipe.source_url}  target="_blank">Receipe Url</a></button>
            </div>
        </Fragment>
    )
}

export default ReceipesButton