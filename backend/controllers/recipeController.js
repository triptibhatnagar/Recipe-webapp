import Recipe from "../models/Recipe.js";

// ✅ 1️⃣ Get all recipes (READ)
export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find(); // fetch all recipes
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Server error while fetching recipes" });
  }
};

// ✅ 2️⃣ Get single recipe by ID (READ)
export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id); // find recipe using MongoDB _id
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipe" });
  }
};

// ✅ 3️⃣ Create new recipe (CREATE)
export const createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, instructions, image } = req.body;
    const newRecipe = new Recipe({
      title,
      description,
      ingredients,
      instructions,
      image,
    });
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(400).json({ message: "Failed to create recipe" });
  }
};

// ✅ 4️⃣ Update recipe (UPDATE)
export const updateRecipe = async (req, res) => {
  try {
    const updated = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // returns updated document
    });
    if (!updated) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: "Failed to update recipe" });
  }
};

// ✅ 5️⃣ Delete recipe (DELETE)
export const deleteRecipe = async (req, res) => {
  try {
    const deleted = await Recipe.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete recipe" });
  }
};
