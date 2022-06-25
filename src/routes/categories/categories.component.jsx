import { useEffect,useState } from "react";

const Categories = ()=>{
    const[categories,setCategories]=useState([]);
    useEffect(()=>{
        console.log("surbhi")
        fetch(`forkify-api.herokuapp.com/phrases.html`)
      .then((response)=>response.text())
      .then((receipeCategory)=>setCategories(receipeCategory))
    },[])
    console.log(categories)
    return(
        <div>{categories}</div>
    )
}
export default Categories