import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
import Portfolio from './pages/Porfolio'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  )
}

export default App
