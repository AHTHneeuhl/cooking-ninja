import { Link } from "react-router-dom";
import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => (
        <div className='card' key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 99)}...</div>
          <Link to={`/recipes/${recipes.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;