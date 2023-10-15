const RecipeCard = ({ recipe }: any) => {
  return (
    <div className="flex bg-white border border-yellow-500 shadow-lg rounded-lg h-[200px] w-[80%] mb-8">
      <img
        src={recipe["recipe"]["image"]}
        alt="tile-image"
        className="w-[250px] mr-4"
      />
      <p className="text-xl font-bold">{recipe["recipe"]["label"]}</p>
    </div>
  );
};

export default RecipeCard;
