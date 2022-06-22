import { Fragment } from 'react'
import './searchQueryButton.styles.css'
const SearchQueryButton = ({onChangeClick}) => {
  return (
    <Fragment>
      <button onClick={onChangeClick}><i className="fa-solid fa-magnifying-glass"></i></button>
    </Fragment>
  )
}

export default SearchQueryButton