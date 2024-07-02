import { BrowserRouter , Route, Routes} from 'react-router-dom'
import Popular from './components/Popular'


function App() {

  return (
    <div className='m-0 p-0 bg-gradient-to-b from-teal-700 via-emerald-700 to-teal-900'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Popular />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
