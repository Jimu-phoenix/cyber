import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Test from './pages/Test'
import Events from './pages/Events'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element={<Test />} />
        <Route path='/test' element={<Test />} />
        <Route path='/events' element={<Events />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
