/* eslint-disable react/prop-types */
import { Abilities } from './Abilities'
import { Movements } from './Movements'
import { SearchInput } from './searchInput'
import './styles/BodyOfSearch.css'
import { Types } from './Types'
export function BodyOfSearch({data}){
  if(!data) {
    return false
  }
  
  return(
    <section className="content">
      <div className='name-of-search'><h1>{data.name}</h1></div>
      <Types data={data.types}/>
      <img src={data.image} className='img-of-search'/>
      <Abilities data={data.abilities}/>
      <Movements data={data.moves}/>
    </section>
  )
}