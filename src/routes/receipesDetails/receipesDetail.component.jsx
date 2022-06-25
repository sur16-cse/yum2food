import './receipesDetail.styles.css'
import {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import {Fragment} from 'react'
import { Link } from 'react-router-dom';
import { Hearts } from  'react-loader-spinner'
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
            <Hearts
                height="100"
                width="100"
                color='red'
                ariaLabel='loading'
            />  
            <div className='details'>
                <div className="receipedetail-image">
                    <img src={recipeDetail.image_url} alt="details"/>
                </div>
                <div className='recipe-title'>
                    <p>{recipeDetail.title}</p>
                </div>
                <div className='receipe-ingredient'>
                <div className='recipe-ingredient-title'>Recipe Ingredients</div>
                {
                    recipeDetail.ingredients && recipeDetail.ingredients.map((ingredient,i)=>(
                        <div key={i} className="ing">
                            <p>{ingredient}</p>
                            
                        </div>
                    ))
                }
                </div>
                <div className="directions">
                    <div className='recipe-ingredient-title'>How to Cook it</div>
                    <p>This recipe was carefully designed and tested by <span>{recipeDetail.publisher}</span>. Please check out directions at their website.</p>
                    <button><a href={recipeDetail.publisher_url} target="_blank"  rel="noreferrer">Directions</a></button>
                </div>
            </div>
            <div class="parent-page">
                <Link to='/receipes'>
                    <button><a>Select other Recipe</a></button>
                </Link>
            </div>
        </Fragment>
    )
}

export default ReceipeDetail