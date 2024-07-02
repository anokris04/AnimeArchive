import { BrowserRouter , Route, Routes} from 'react-router-dom'
import Popular from './components/Popular'
import AnimeItem from './components/AnimeItem'


function App() {

  return (
    <div className='m-0 p-0 bg-gradient-to-b from-teal-700 via-emerald-700 to-teal-900'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Popular />}/>
          <Route path='/anime/:id' element={<AnimeItem />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
