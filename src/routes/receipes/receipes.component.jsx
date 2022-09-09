import SearchReceipes from "../../components/searchReceipes/searchReceipes.component";
import { useState, useEffect } from "react";
import CardList from "../../components/cardlist/cardlist.component";
import { Fragment } from "react";
import "./receipes.styles.css";
import { Audio, Puff } from "react-loader-spinner";
import { useLocation } from "react-router-dom";
import SearchQueryButton from "../../components/searchQueryButton/searchQueryButton.component";

const Receipes = () => {
  
  const [query, setQuery] = useState("");
  const [searchField, setSearchField] = useState("");
  const [receipesList, setReceipesList] = useState([]);
  const [error, setError] = useState("");
  const [show, setShow] = useState(true);
  const [title, setTitle] = useState(false);
  const [loading, setLoading] = useState(false);
  const location=useLocation()
  
  //  useEffect(()=>{
  //      setLoading(true);
  //      setTimeout(()=>{
  //          setLoading(false)
  //      },5000)
  //  },[])

  useEffect(() => {
    console.log(location.state)
    if(location.state && location.state.category!==''){
      setQuery(location.state.category)
      setLoading(true);
      setTitle(true);
    }

    if (query !== "") getdata(query);
  }, [query]);
  
  async function getdata(query) {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${query}`
    );
    const get = await res.json();
    setLoading(false);
    console.log(loading, show, title);
    setReceipesList(get.recipes);
    console.log(get);
    if (get.recipes === undefined) {
      setError("The search you are trying is not exist. Please try again");
      console.log("error is there");
      setTitle(false);
    }
    setSearchField("");
  }

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    console.log(searchFieldString);
    setSearchField(searchFieldString);
    event.target.value = "";
    setLoading(false);
  };

  // if(location.state.category!=='')
  // setQuery(location.state.category)
  // console.log(query)

  const updateQuery = () => {
    if(searchField!=='')
    setQuery(searchField);
   
    if(searchField!=='')
    {
      setLoading(true);
      setTitle(true);
    }
    else{
      setLoading(false)
    }
  };

  return (
    <Fragment>
      <div className="receipes">
        <h1>
          search receipes with <span>yum2food</span>
        </h1>
      </div>
      <div className="searchbox">
        <SearchReceipes
          className="receipes-search-box"
          onChangeHandler={onSearchChange}
          placeholder="search receipes"
          value={searchField}
        />
        <SearchQueryButton onChangeClick={updateQuery} />
      </div>
      {loading ? (
        <div className="loader">
          <Puff height="200" width="200" color="Red" ariaLabel="loading" />
        </div>
      ) : (
        <div>
          { title && 
            <h2>
              The Receipe List: <span>{query}</span>
            </h2>
          }
          <div className="cards">
            {(receipesList || "").length > 0 ? (
              receipesList &&
              receipesList.map((recipe, i) => {
                return (
                  <div key={i}>
                    <CardList recipe={recipe} />
                  </div>
                );
              })
            ) : (
              <div className="error">
                <p>{error}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default Receipes;