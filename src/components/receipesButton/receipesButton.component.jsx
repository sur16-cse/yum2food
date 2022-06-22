import { Fragment } from "react"
import { Link,Outlet } from 'react-router-dom'
import './receipesButton.styles.css'
const ReceipesButton=({recipe})=>{
    return(
        <Fragment>
            <Outlet/>
            <div className="receipe-data-button">
                <Link to={`/recipes/${recipe.recipe_id}`} state={{ from: recipe.recipe_id }}>
                    <button>Details</button>
                </Link>
                <button target="_blank"><a href={recipe.source_url}>Receipe Url</a></button>
            </div>
        </Fragment>
    )
}

export default ReceipesButton