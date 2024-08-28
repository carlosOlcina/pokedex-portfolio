import { useContext, useRef } from 'react'
import './styles/searchInput.css'
import { SearchContext } from '../context/search'
export function SearchInput (){
  const {setSearch}= useContext(SearchContext)
  const query = useRef()

  const HandleSearch= ()=>{
    const value = query.current.value;
    setTimeout(()=>{setSearch(value)}, 2000)
  }
  const handleSubmit= (event)=>{
    event.preventDefault()
    const value = query.current.value;    
    setSearch(value)
  }
  return (
    <section className="input-container">
    <label htmlFor="search" className='label-search'>Introduce el nombre o nº de pokedex</label>
    <form className="input-search" onSubmit={handleSubmit} action=''>
      <input ref={query} type="text" id='search' onChange={HandleSearch} placeholder="Ej: pikachu"/>
      <input type="submit" value="Enviar" className='submit-search'/>
    </form>
    </section>

  )
}
