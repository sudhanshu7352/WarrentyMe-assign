import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Home } from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
