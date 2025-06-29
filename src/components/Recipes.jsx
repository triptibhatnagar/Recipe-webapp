import { useContext } from "react"
import Card from "./Card"
import { RecipeContext } from '../context/RecipeContext'

const Recipes = () => {
  const combined_dishes = useContext(RecipeContext)

  return (
    <>
        <div className="flex flex-wrap justify-center">
            {combined_dishes.map((val, id) => {
                return <Card key={id} data={val}/>
            })}
    </div>
    </>
  )
}

export default Recipes
