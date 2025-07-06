import { useState, useEffect } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

import About from './About';
import { ThemeSwitch } from './components/ThemeSwitch/ThemeSwitch';
import { Counter } from './components/Counter/Counter.jsx';

function App() {
  const [count, setCount] = useState(0);

  const [currentTheme, setCurrentTheme] = useState('dark'); 

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleThemeChange = (newTheme) => {
    setCurrentTheme(newTheme);
  };

  useEffect(() => {
    document.body.className = currentTheme; 
  }, [currentTheme]); 

  return (
    <div className={currentTheme}>
      <About />
      <ThemeSwitch currentTheme={currentTheme} onThemeChange={handleThemeChange} />
      <Counter count={count} onIncrement={handleIncrement} />
    </div> 
  )
}

export default App