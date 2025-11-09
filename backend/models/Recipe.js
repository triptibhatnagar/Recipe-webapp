import mongoose from "mongoose";

// 1️⃣ Define Schema (structure of each Recipe document)
const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // title must be provided
      trim: true,     // removes spaces from start/end
    },
    description: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [String], // array of strings like ["Sugar", "Flour", "Eggs"]
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    image: {
      type: String, // store image URL or file path
      default: "",  // default empty
    },
    rating: {
      type: Number,
      default: 0,   // initially no rating
      min: 0,
      max: 5,
    },
    comments: [
      {
        user: { type: String },  // username or user ID
        text: { type: String },
        date: { type: Date, default: Date.now },
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, // link to User model later
      ref: "User",
    },
  },
  { timestamps: true } // automatically adds createdAt & updatedAt fields
);

// 2️⃣ Create a Model using Schema
const Recipe = mongoose.model("Recipe", recipeSchema);

// 3️⃣ Export it so we can use it in controllers/routes
export default Recipe;
