import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RecipeDetails from './pages/RecipeDetails.jsx'
import Recipes from './components/Recipes.jsx'
import { RecipeContext } from './context/RecipeContext.jsx'
import { combined_dishes } from "./data/recipesdata.js";

const router = createBrowserRouter([
  {
    path : '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <Recipes/>
      },
      {
        path: 'recipe/:id',
        element: <RecipeDetails />,
      },
    ],

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipeContext.Provider value={combined_dishes}>
      <RouterProvider router={router}/>
    </RecipeContext.Provider>
  </StrictMode>
)