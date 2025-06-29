// import './App.css'
import { Outlet } from 'react-router-dom'
import Recipes from './components/Recipes'
import SearchBar from './components/SearchBar'

function App() {

  return (
    <div>
      <SearchBar/>
      <Outlet />
    </div>
  )
}

export default App