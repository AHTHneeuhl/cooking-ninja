import { useParams } from "react-router-dom";
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
      {recipe && <h2>{recipe.title}</h2>}
    </div>
  );
};

export default Recipe;
