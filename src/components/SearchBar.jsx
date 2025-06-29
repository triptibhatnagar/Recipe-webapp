import { RiSearchLine } from "@remixicon/react"

const SearchBar = () => {
  return (
    <div className="relative w-full p-10">
      <span className="absolute text-zinc-500 top-1/2 left-15 -translate-y-1/2">
        <RiSearchLine size={20}/>
      </span>
      <input type="text" placeholder="Search for Recipes" className="text-black bg-white  p-3 w-full rounded-full px-12 transition-colors focus:bg-blue-50"/>
    </div>
  )
}

export default SearchBar