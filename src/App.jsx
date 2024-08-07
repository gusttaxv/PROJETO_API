import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Italia from './Italia'
import Japao from './Japao'
import Brazil from './Brazil'

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element= {<Home/>} />
    <Route path='/italia' element= {<Italia/>} />
    <Route path='/japao' element={<Japao/>} />
    <Route path='/brazil' element={<Brazil/>} />
    <Route path='*' element= {<h1>Not Found</h1>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
