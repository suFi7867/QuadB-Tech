

//step 1


import {  createContext, useEffect, useState } from "react";


export const AppContext = createContext()

// step 2

const FetchData = ()=>{
  return fetch("https://api.tvmaze.com/search/shows?q=all")
  .then(res=>res.json())


}


export const AppContextProvider=({children})=>{

    const [data,setData]=useState([])
    const [loading,setloading]=useState(true)
  
    useEffect(()=>{
      handleFetch()
    },[])
  
    const handleFetch = ()=>{
  
      setloading(true)
      try{
          FetchData().then((res)=>setData(res))
          setloading(false)
      }catch(e){
          setloading(true)
          console.log(e.message)
      }
  
    }

  return( <AppContext.Provider value={{loading
   , setloading , data,setData}} >
    {children}
   
  </AppContext.Provider>
  )
}

