import React from 'react';
import { useLocation } from "react-router-dom";



const Details = () => {
    const location = useLocation();

    const recipe = location.state.recipe;

  return (
    <div style={{ backgroundColor: "cyan" }}>
      <h1 style={{ color: "brown", padding: "2rem" }}>{recipe.label}</h1>
      <img src={recipe.image} alt="myPhoto" />
      {console.log({ recipe })}
      <h2 style={{ color: "purple", marginTop: "2rem" }}>
        What's need to cook?
      </h2>
      {recipe.ingredientLines.map((item) => (
        <h5>{item}</h5>
      ))}
    </div>
  );
}

export default Details