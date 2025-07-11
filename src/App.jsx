// import { useState } from 'react'
import { BarChart } from 'recharts';
import './App.css'
import Dashboard from './components/dash-board-component/dashboard';
import Navbar from './components/nav-bar/navbar';
// import { useState } from 'react';
import './App.css'
function App() {
  // const [theme, setTheme] = useState("light");
  return (
    <div>
      {/* <Navbar theme={ theme} setTheme={setTheme} /> */}
      <Dashboard/>
    </div>
  )
}

export default App
