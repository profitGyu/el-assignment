import { Routes, Route } from 'react-router-dom'
import Home from './home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<div>잘못된 접근입니다.</div>} />
    </Routes>
  )
}

export default App
