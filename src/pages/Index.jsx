import { useContext } from "react";
import { BodyOfSearch } from "../components/BodyOfSearch.jsx";
import { Header } from "../components/Header.jsx";
import { SearchMenu } from "../components/searchMenu.jsx";
import { useResultSearch } from "../hooks/useResultSearch.jsx";
import { Footer } from "../components/footer.jsx";
import { SearchContext } from "../context/search.jsx";
import { HeaderMobile } from "../components/mobile-components/HeaderMobile.jsx";

export function Index(){
  const {search} = useContext(SearchContext)
  const pokemon = useResultSearch(search, 'pokemon') 
  const isMovile = window.innerWidth <= 750


  
  
  return(
    <main>
      {isMovile ? <HeaderMobile/> : <Header/>}
      <SearchMenu/>
      <BodyOfSearch data={pokemon} />
      <Footer/>
    </main>
  )
}