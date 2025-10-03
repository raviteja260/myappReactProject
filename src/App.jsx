import { useState } from "react";
import ThemeContext from "./ThemeContext"
import Home from "./Home"


function App() {
  
  let [darkMode, setDarkMode] = useState('light');
  function handleToggleDarkMode(){
    if(darkMode === 'light'){
      setDarkMode('dark');
    }
    else{
      setDarkMode('light');
    }
  }

  return (
    <>
      <ThemeContext.Provider value={darkMode}>
                <Home toggleDarkMode={handleToggleDarkMode} />
      </ThemeContext.Provider>
    </>
  )
}

export default App
