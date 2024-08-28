import { useContext } from "react";
import { BodyOfSearch } from "../components/BodyOfSearch.jsx";
import { Header } from "../components/Header.jsx";
import { SearchMenu } from "../components/searchMenu.jsx";
import { useResultSearch } from "../hooks/useResultSearch.jsx";
import { Footer } from "../components/footer.jsx";
import { SearchContext } from "../context/search.jsx";

export function Index(){
  const {search} = useContext(SearchContext)
  const pokemon = useResultSearch(search, 'pokemon') 
  console.log(search, 's');
  
  
  
  return(
    <main>
      <Header/>
      <SearchMenu/>
      <BodyOfSearch data={pokemon} />
      <Footer/>
    </main>
  )
}