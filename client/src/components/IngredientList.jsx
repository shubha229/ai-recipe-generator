import { useState } from "react";
import { useRecipe } from "../context/RecipeContext";

function IngredientList() {
  const { ingredients, setIngredients } = useRecipe();

  const [newIngredient, setNewIngredient] =
    useState("");

  const addIngredient = () => {
    const value = newIngredient.trim();

    if (
      value &&
      !ingredients.includes(value)
    ) {
      setIngredients((prev) => [
        ...prev,
        value,
      ]);

      setNewIngredient("");
    }
  };

  const removeIngredient = (index) => {
    setIngredients((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  if (!ingredients.length) return null;

  return (
    <div className="ingredient-list">
      <div className="section-header">
        <h3>🥗 Detected Ingredients</h3>

        <span className="ingredient-count">
          {ingredients.length} items
        </span>
      </div>

      <div className="ingredient-tags">
        {ingredients.map(
          (ingredient, index) => (
            <div
              key={index}
              className="ingredient-tag"
            >
              <span>{ingredient}</span>

              <button
                className="remove-btn"
                onClick={() =>
                  removeIngredient(index)
                }
              >
                ×
              </button>
            </div>
          )
        )}
      </div>

      <div className="add-ingredient">
        <input
          className="ingredient-input"
          placeholder="Add ingredient..."
          value={newIngredient}
          onChange={(e) =>
            setNewIngredient(
              e.target.value
            )
          }
          onKeyDown={(e) =>
            e.key === "Enter" &&
            addIngredient()
          }
        />

        <button
          onClick={addIngredient}
          className="add-btn"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default IngredientList;