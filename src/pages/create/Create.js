import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInputRef = useRef(null);
  const navigate = useNavigate();

  const { postData, data } = useFetch("http://localhost:3000/recipes", "POST");

  const handleSubmit = (e) => {
    e.preventDefault();

    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes",
    });
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();
    const ingredient = newIngredient.trim();

    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    }
    setNewIngredient("");
    ingredientInputRef.current.focus();
  };

  useEffect(() => {
    if (data) {
      navigate.push("/");
    }
  }, [data, navigate]);

  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title - </span>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients - </span>
          <div className='ingredients'>
            <input
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInputRef}
            />
            <button className='btn' onClick={handleAddIngredient}>
              Add
            </button>
          </div>
        </label>
        <p>
          Current Ingredients -{" "}
          {ingredients.map((ingredient) => (
            <em key={ingredient}>{ingredient}, </em>
          ))}
        </p>

        <label>
          <span>Recipe Method - </span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking Time (Minutes) - </span>
          <input
            type='number'
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className='btn'>Submit</button>
      </form>
    </div>
  );
};

export default Create;
