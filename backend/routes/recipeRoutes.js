import express from "express";
import {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipeController.js";

const router = express.Router();

// ✅ READ → Get all recipes
router.get("/", getRecipes);

// ✅ READ → Get single recipe by ID
router.get("/:id", getRecipeById);

// ✅ CREATE → Add a new recipe
router.post("/", createRecipe);

// ✅ UPDATE → Update an existing recipe
router.put("/:id", updateRecipe);

// ✅ DELETE → Delete a recipe
router.delete("/:id", deleteRecipe);

export default router;
