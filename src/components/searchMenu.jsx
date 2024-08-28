import { SearchInput } from './searchInput'
import './styles/searchMenu.css'
export function SearchMenu(){
  return(
    <container className="content search-menu">
      <h2 className="header-search">Pokemon</h2>
      <SearchInput/>
    </container>
  )
}