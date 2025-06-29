import { RiTeamLine, RiTimeLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const Card = ({data}) => {
  return (
    <div className="bg-gray-100 h-auto w-80 rounded-lg flex flex-col items-center justify-center hover:scale-104 hover:bg-white m-5 hover:transition-colors">
      <img src={data.image} alt="" className="h-75 w-70 rounded-md m-3 "/>
      <h1 className="text-xl text-black font-semibold">{data.title}</h1>
      <h2 className="text-zinc-600 font-light">{data.tags.map((val, idx) => {
            const capitalized = val.charAt(0).toUpperCase() + val.slice(1);
            return idx !== data.tags.length - 1 ? capitalized + ", " : capitalized;
      })}</h2>
      <div className="flex justify-between w-full px-4 text-zinc-500 font-medium">
        <div className="flex items-center p-1 justify-between">
            <span className="mr-2">
                <RiTimeLine size={20}/>
            </span>
            <h2>{data.prepTime}</h2>
        </div>
        <div className="flex items-center p-1 justify-between">
            <span className="mr-2">
                <RiTeamLine size={20}/>
            </span>
            <h2>{data.servings}</h2>
        </div>
      </div>
      {/* <div className="flex items-center w-full text-black justify-center font-medium pb-1">
            <span className="mr-2">
                <RiRestaurantLine size={20}/>
            </span>
            <h2>{" "+data.flavourProfile}</h2>
        </div> */}
        <Link to={`/recipe/${data.id}`}>
            <button className="bg-orange-700 hover:bg-gradient-to-r from-yellow-300 via-orange-500 to-red-500 mb-3 p-3 rounded-full hover:cursor-pointer hover:scale-108 px-5">View Recipe</button>
        </Link>
    </div>
  )
}

export default Card