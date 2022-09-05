import { useEffect, useState } from "react"; 
import { Fragment } from "react"; 
import CategoryCardlist from "../../components/categoryCard/categoryCard.component";
import SearchReceipes from "../../components/searchReceipes/searchReceipes.component";
const Categories = () => { 
  const [categories, setCategories] = useState([]); 
  const[categoriesApi,setCategoriesApi]=useState([])
  const [searchCatField,setSearchCatField]=useState(''); //[value,setValue]
  const [filteredCategories,setfilteredCategories]=useState(categories)
  
  //get list mention below in jsx using this fetch
//   useEffect(()=>{
//     fetch(`forkify-api.herokuapp.com/phrases.html`)
//   .then((response)=>response.text())
//   .then((receipeCategory)=>setCategoriesApi(receipeCategory))
// },[])
//console.log(categoriesApi)


  function compute() { 
    const arr = document.getElementsByTagName("li"); 
    const temp = []
    for (let i = 0; i < arr.length; i++) { 
      temp.push(arr[i].innerHTML); 
    } 
    setCategories(temp); 
  } 
  useEffect(() => { 
    compute(); 
  }, []); 
  
  // useEffect(()=>{
  //   const newFilteredCategories=categories.filter((category)=>{
  //     return category.toLocaleLowerCase().includes(searchCatField);
  //   });
  //   setfilteredCategories(newFilteredCategories)
  // },[categories,searchCatField])
 

  // const onSearchCatChange=(event)=>{
  //   const searchFieldString=event.target.value.toLocaleLowerCase();
  //   setSearchCatField(searchFieldString);
  // }
  return ( 
    <Fragment>
    {/* <SearchReceipes
          className="receipes-search-box"
          onChangeHandler={onSearchCatChange}
          placeholder="search..."
          value={searchCatField}
        /> */}
    <div className="container" style={{ display: "none" }}> 
      <h2 className="phrases-title">Available search queries</h2> 
      <ul className="phrases-list"> 
        <li>carrot</li> 
        <li>broccoli</li> 
        <li>asparagus</li> 
        <li>cauliflower</li> 
        <li>corn</li> 
        <li>cucumber</li> 
        <li>green pepper</li> 
        <li>lettuce</li> 
        <li>mushrooms</li> 
        <li>onion</li> 
        <li>potato</li> 
        <li>pumpkin</li> 
        <li>red pepper</li> 
        <li>tomato</li> 
        <li>beetroot</li> 
        <li>brussel sprouts</li> 
        <li>peas</li> 
        <li>zucchini</li> 
        <li>radish</li> 
        <li>sweet potato</li> 
        <li>artichoke</li> 
        <li>leek</li> 
        <li>cabbage</li> 
        <li>celery</li> 
        <li>chili</li> 
        <li>garlic</li> 
        <li>basil</li> 
        <li>coriander</li> 
        <li>parsley</li> 
        <li>dill</li> 
        <li>rosemary</li> 
        <li>oregano</li> 
        <li>cinnamon</li> 
        <li>saffron</li> 
        <li>green bean</li> 
        <li>bean</li> 
        <li>chickpea</li> 
        <li>lentil</li> 
        <li>apple</li> 
        <li>apricot</li> 
        <li>avocado</li> 
        <li>banana</li> 
        <li>blackberry</li> 
        <li>blackcurrant</li> 
        <li>blueberry</li> 
        <li>boysenberry</li> 
        <li>cherry</li> 
        <li>coconut</li> 
        <li>fig</li> 
        <li>grape</li> 
        <li>grapefruit</li> 
        <li>kiwifruit</li> 
        <li>lemon</li> 
        <li>lime</li> 
        <li>lychee</li> 
        <li>mandarin</li> 
        <li>mango</li> 
        <li>melon</li> 
        <li>nectarine</li> 
        <li>orange</li> 
        <li>papaya</li> 
        <li>passion fruit</li> 
        <li>peach</li> 
        <li>pear</li> 
        <li>pineapple</li> 
        <li>plum</li> 
        <li>pomegranate</li> 
        <li>quince</li> 
        <li>raspberry</li> 
        <li>strawberry</li> 
        <li>watermelon</li> 
        <li>salad</li> 
        <li>pizza</li> 
        <li>pasta</li> 
        <li>popcorn</li> 
        <li>lobster</li> 
        <li>steak</li> 
        <li>bbq</li> 
        <li>pudding</li> 
        <li>hamburger</li> 
        <li>pie</li> 
        <li>cake</li> 
        <li>sausage</li> 
        <li>tacos</li> 
        <li>kebab</li> 
        <li>poutine</li> 
        <li>seafood</li> 
        <li>chips</li> 
        <li>fries</li> 
        <li>masala</li> 
        <li>paella</li> 
        <li>som tam</li> 
        <li>chicken</li> 
        <li>toast</li> 
        <li>marzipan</li> 
        <li>tofu</li> 
        <li>ketchup</li> 
        <li>hummus</li> 
        <li>chili</li> 
        <li>maple syrup</li> 
        <li>parma ham</li> 
        <li>fajitas</li> 
        <li>champ</li> 
        <li>lasagna</li> 
        <li>poke</li> 
        <li>chocolate</li> 
        <li>croissant</li> 
        <li>arepas</li> 
        <li>bunny chow</li> 
        <li>pierogi</li> 
        <li>donuts</li> 
        <li>rendang</li> 
        <li>sushi</li> 
        <li>ice cream</li> 
        <li>duck</li> 
        <li>curry</li> 
        <li>beef</li> 
        <li>goat</li> 
        <li>lamb</li> 
        <li>turkey</li> 
        <li>pork</li> 
        <li>fish</li> 
        <li>crab</li> 
        <li>bacon</li> 
        <li>ham</li> 
        <li>pepperoni</li> 
        <li>salami</li> 
        <li>ribs</li> 
      </ul> 
    </div>
    <CategoryCardlist categories={categories}/>
    </Fragment>
  ); 
}; 
export default Categories;

