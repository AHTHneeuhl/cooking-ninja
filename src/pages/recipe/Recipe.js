import { useParams } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import { useFetch } from "../../hooks/useFetch";

import "./Recipe.css";

const Recipe = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, isPending, error } = useFetch(url);

  return (
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='pending'>{isPending}</p>}
      {recipe && (
        <Fragment>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className='method'>{recipe.method}</p>
        </Fragment>
      )}
    </div>
  );
};

export default Recipe;
