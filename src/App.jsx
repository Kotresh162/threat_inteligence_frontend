// import { useState } from 'react'
import { BarChart } from 'recharts';
import './App.css'
import Dashboard from './components/dash-board-component/dashboard';
import Navbar from './components/nav-bar/navbar';
import { useState } from 'react';
function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <Navbar theme={ theme} setTheme={setTheme} />
      {/* <Dashboard/> */}
    </>
  )
}

export default App
