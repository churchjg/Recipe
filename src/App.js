import './App.css';
import Recipe from './Components/Recipe.js'
import React, {useEffect, useState} from "react"
import { SearchFilter } from './Components/search-filter/search-filter.component'

const App = () => {

  const APP_ID = 'dc0fe388';
  const APP_KEY = '4a6043668869b32e68fa7ee617d21530'

  const [recipes, setRecipes] = useState([]); //allows us to put recipes inside of a object with array inside of that
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')


useEffect( () =>  {
  getRecipes();
}, [query]); //speeds up page by ensuring we are only calling the effect once, useEffect only changes when counter does

const getRecipes = async () => {
const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
const data = await response.json();
setRecipes(data.hits); //this puts all of our data hits (recipes) into the same state
console.log(data.hits);
}

const updateSearch = e => {
  setSearch(e.target.value);
};


const getSearch = e => {
  e.preventDefault();
  setQuery(search)
  setSearch('');
}

const filterLogic = e => {
  e.target.classList.toggle('active-filter');
  const li = e.target;
  if (li.classList.contains('active-filter')) {
    setQuery(li.innerText);
  } else {
    setQuery('');
  }
};

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search Recipes"/>
        <button  className="search-button" type="submit">
          Search
        </button>
        </form>
        <div className="search-filter">
          <SearchFilter filterLogic={filterLogic} />
        </div>
        <div className="recipeStyle">
        {recipes.map(recipe => (
          <Recipe
          key={recipe.recipe.title} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          // description={recipe.recipe.ingredientLines}
          ingredients={recipe.recipe.ingredients}
          // cautions={recipe.recipe.cautions}
          link={recipe.recipe.url}
          />
        ))}
         </div>
    </div>
  );
};
export default App;
