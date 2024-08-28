import { pokemon } from "./search-types/pokemon"

export async function searching(search, section){
  if(search === null) return null
  try{
  const response = await fetch(`https://pokeapi.co/api/v2/${section}/${search}`)
  const json = await response.json()  

  switch (section){
    case 'pokemon':
      return pokemon(json);
    default:
      return new Error('Section not Found')
  }
  }catch(e){
    throw new Error(`Error searching ${section}`) 
  }

}