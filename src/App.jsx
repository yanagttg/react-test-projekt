import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

import About from './components/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <About />    </>
  )
}

export default App
