import { useState } from "react";
import Axios from "axios";
import RecipeCard from "../card/RecipeCard";

const Recipe = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("vegetarian");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = process.env.REACT_APP_EDAMAM_ID;
  const APP_KEY = process.env.REACT_APP_EDAMAM_KEY;

  const url = `https://api.edamam.com/search?q=${inputValue}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${selectValue}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e:any) => {
    e.preventDefault(); 
    getRecipeInfo();
  };

  return (
    <div className="flex items-center flex-col justify-center">
      <h1 className="text-3xl lg:text-4xl font-bold underline mt-[5rem]">Reci<span className="text-yellow-500">p</span>edia</h1>
      <form className="flex flex-col lg:flex-row items-center justify-between w-[90%] lg:w-[70%] mt-12 mb-[4.5rem]" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type the Ingredient"
          autoComplete="Off"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className="h-14 px-8 w-full lg:w-[38%] mb-3 lg:mb-0 rounded-lg shadow-sm outline-none"
        />
        <select className="h-14 px-8 w-full lg:w-[38%] mb-6 lg:mb-0 rounded-lg shadow-sm outline-none">
          <option
            value={selectValue}
            onClick={() => {setSelectValue("vegan");}}
          >
            Vegan
          </option>
          <option
            value={selectValue}
            onClick={() => {setSelectValue("vegetarian");}}
          >
            Vegetarian
          </option>
          <option
            value={selectValue}
            onClick={() => {setSelectValue("low-sugar");}}
          >
            Low-sugar
          </option>
          <option
            value={selectValue}
            onClick={() => {setSelectValue("dairy-free");}}
          >
            Dairy-free
          </option>
          <option
            value={selectValue}
            onClick={() => {setSelectValue("immuno-supportive");}}
          >
            Immuno-supportive
          </option>
          <option
            value={selectValue}
            onClick={() => {setSelectValue("wheat-free");}}
          >
            Wheat-free
          </option>
        </select>
        <button className="p-4 w-[70%] lg:w-[20%] animate-bounce bg-yellow-500 text-white rounded-lg shadow-md">Get Recipe</button>
      </form>
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe}/>
      )) }
    </div>
  );
};

export default Recipe;
