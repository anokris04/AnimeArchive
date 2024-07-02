import { BrowserRouter , Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import AnimeItem from './components/AnimeItem'
import Gallery from "./components/Gallery"
import Name from "./components/Name";


function App() {

  return (
    <div className='m-0 p-0 bg-gradient-to-b from-teal-700 via-emerald-700 to-teal-900'>
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
