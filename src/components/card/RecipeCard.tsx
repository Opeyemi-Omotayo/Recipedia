const RecipeCard = ({ recipe, index }: any) => {

  return (
    <a
      href={recipe["recipe"]["url"]}
      className="flex bg-gray-50 hover:bg-white border overflow-hidden border-yellow-500 shadow-lg rounded-lg w-[95%] lg:w-[80%] mb-8"
      key={index}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={recipe["recipe"]["image"]}
        alt={recipe["recipe"]["label"]}
        className="w-[100px] lg:w-[250px] "
      />
      <div className="w-full p-4">
        <div className="flex items-center justify-between">
          <p className="text-base lg:text-xl font-bold">
            {recipe["recipe"]["label"]}
          </p>
          <p className="bg-gray-100 text-xs lg:text-sm rounded-xl text-gray-600 px-3 py-2">
            {recipe["recipe"]["dietLabels"][0]}
          </p>
        </div>

        <div>
          <p className="text-sm lg:text-base font-semibold pb-2">Ingredients</p>
          {recipe["recipe"]["ingredientLines"].map(
            (ingredient: string, index: number) => (
              <p key={index} className="text-xs lg:text-sm">
                {" "}
                *{ingredient}
              </p>
            )
          )}
        </div>
      </div>
    </a>
  );
};

export default RecipeCard;
