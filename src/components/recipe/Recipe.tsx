import { useState } from "react";

const Recipe = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>Food Recipe Hub</h1>
      <form>
        <input
          type="text"
          placeholder="Type the Ingredient"
          autoComplete="Off"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <select className="app__healthLabels">
          <option
            value="vegan"
          >
            vegan
          </option>
          <option
            value="vegetarian"
          >
            vegetarian
          </option>
          <option
            value="low-sugar"
          >
            low-sugar
          </option>
          <option
            value="dairy-free"
          >
            dairy-free
          </option>
          <option
            value=" immuno-supportive "
          >
            immuno-supportive
          </option>
          <option
            value="wheat-free"
          >
            wheat-free
          </option>
        </select>
        <button>Get Recipe</button>
      </form>
    </div>
  );
};

export default Recipe;
