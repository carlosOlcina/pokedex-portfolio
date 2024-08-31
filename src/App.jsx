import './App.css'
import { SearchProvaider } from './context/search'
import { Habilities } from './pages/Habilities'
import { Index } from './pages/Index'
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
      <Routes>
        {/* <Route path='/' element={<Index/>}/> */}
        <Route path='/' element={<Habilities/>}/>
      </Routes>
      
  )
}

export default App
