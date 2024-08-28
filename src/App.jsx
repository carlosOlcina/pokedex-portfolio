import './App.css'
import { SearchProvaider } from './context/search'
import { Index } from './pages/Index'

function App() {
  return (
    <SearchProvaider>
      <Index/>
    </SearchProvaider>
  )
}

export default App
