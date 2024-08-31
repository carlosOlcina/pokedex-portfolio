import { useEffect, useState } from "react"
import { searching } from "../services/searching.js"

export function useResultSearch(search, section){
  const [result, setResult] = useState()

  useEffect(()=>{
    if(!search) return
    const searchLowerCase = search.toLowerCase()
    const fetchData = async ()=>{
      try {
        const data = await searching(searchLowerCase, section)
        setResult(data)
      }catch(e){
        new Error(`Error in the searching: ${e}`)
      }
    }
    // if()
    fetchData()
  }, [search, section])
  return result
}