import { BrowserRouter , Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import AnimeItem from './components/AnimeItem'
import Gallery from "./components/Gallery"
import Name from "./components/Name";


function App() {

  return (
    <div>
      <Name/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/anime/:id' element={<AnimeItem />}/>
          <Route path="/character/:id" element={<Gallery />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
