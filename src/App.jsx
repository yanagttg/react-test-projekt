import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

import About from './About';
import { ThemeSwitch } from './components/ThemeSwitch/ThemeSwitch';
import { Counter } from './components/Counter/Counter.jsx';

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <>
      <About />
      <ThemeSwitch></ThemeSwitch>
      <Counter count={count} onIncrement={handleIncrement} />
         </>
  )
}

export default App
