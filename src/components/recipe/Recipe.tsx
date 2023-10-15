import { useState } from "react";

const Recipe = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("vegetarian");

  return (
    <div className="flex items-center flex-col justify-center">
      <h1 className="text-3xl lg:text-4xl font-bold underline mt-[4rem]">Food Recipe Hub</h1>
      <form className="flex flex-col lg:flex-row items-center justify-between w-[90%] lg:w-[70%] mt-12">
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
            vegan
          </option>
          <option
            value={selectValue}
            onClick={() => {setSelectValue("vegetarian");}}
          >
            vegetarian
          </option>
          <option
            value={selectValue}
            onClick={() => {setSelectValue("low-sugar");}}
          >
            low-sugar
          </option>
          <option
            value={selectValue}
            onClick={() => {setSelectValue("dairy-free");}}
          >
            dairy-free
          </option>
          <option
            value={selectValue}
            onClick={() => {setSelectValue("immuno-supportive");}}
          >
            immuno-supportive
          </option>
          <option
            value={selectValue}
            onClick={() => {setSelectValue("wheat-free");}}
          >
            wheat-free
          </option>
        </select>
        <button className="p-4 w-[70%] lg:w-[20%] animate-bounce bg-yellow-500 text-white rounded-lg shadow-md">Get Recipe</button>
      </form>
    </div>
  );
};

export default Recipe;
