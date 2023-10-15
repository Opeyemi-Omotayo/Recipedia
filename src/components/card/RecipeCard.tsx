const RecipeCard = ({ recipe }: any) => {
  return (
    <div
      className="flex bg-gray-50 hover:bg-white border overflow-hidden border-yellow-500 shadow-lg rounded-lg h-[250px] w-[80%] mb-8"
      key={Math.random()}
    >
      <img
        src={recipe["recipe"]["image"]}
        alt={recipe["recipe"]["label"]}
        className="w-[250px] "
      />
      <div className="w-full p-4">
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold">{recipe["recipe"]["label"]}</p>
          <p className="bg-gray-100 rounded-xl text-gray-600 px-4 py-2">
            {recipe["recipe"]["dietLabels"][0]}
          </p>
        </div>

        <div>
          <p className="text-base font-semibold pb-2">Ingredients</p>
          {recipe["recipe"]["ingredientLines"].map(
            (ingredient: string, index: number) => (
              <p key={index} className="text-sm">
                {" "}
                *{ingredient}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
