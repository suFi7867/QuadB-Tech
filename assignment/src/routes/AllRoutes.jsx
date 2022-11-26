import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import SingleMoviePage from "../components/SingleMoviePage"



export  const AllRoutes=()=>{
  return(
    <div>

<Routes>
  <Route path='/'  element={<Home/>}/>
  <Route path='/show/:id' element={<SingleMoviePage/>}/>
  
</Routes>

    </div>
  )
}