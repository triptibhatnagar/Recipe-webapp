import { useContext } from "react"
import { useParams } from "react-router-dom"
import { RecipeContext } from "../context/RecipeContext"

const RecipeDetails = () => {
  const {id} = useParams()
  const recipes = useContext(RecipeContext)
  const recipe = recipes.find(r => r.id === id)

  if(!recipe) return <div>Recipe Not Found</div>
  
  return (
    <div className="flex justify-center h-[calc(100vh-125px)] overflow-hidden px-4 ">
      <div className="flex flex-col w-1/2 bg-zinc-300 py-12">
        <h1 className="text-3xl font-medium ">{recipe.title}</h1>
        <img src={recipe.image} 
        className="object-cover h-[75%] w-full rounded-md border-black " />
        <h1 className=" ">{recipe.prepTime}</h1>
        <h1 className=" ">{recipe.servings}</h1>
        <h1 className=" ">{recipe.calories}</h1>
        <h1 className=" ">{recipe.flavourProfile}</h1>
        <h1 className=" ">{recipe.garnish}</h1>
      </div>
      <div className="w-1/2 h-auto bg-zinc-100 overflow-y-auto">
        <div className="w-full text-zinc-700 pr-15 pl-10 py-15">
           
          <h1 className="text-xl">Ingredients</h1>
           <ul className="list-disc list-inside space-y-1">{recipe.ingredients.map((val, idx) => {
            return <li key={idx}>{val}</li>
           })}</ul>
           <h1 className="text-xl">Steps</h1>
           <ol className="list-decimal list-inside space-y-1">{recipe.steps.map((val, idx) => {
            return <li key={idx}>{val}</li>
           })}</ol>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails