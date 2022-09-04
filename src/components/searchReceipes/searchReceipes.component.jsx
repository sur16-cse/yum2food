import { Fragment } from 'react'
import './searchReceipes.styles.css'
const SearchReceipes=({className,placeholder,onChangeHandler,value})=>{
   return(
    <Fragment>
        <input
        className={`search-box ${className}` }
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
        />
    </Fragment>  
   )
}

export default SearchReceipes