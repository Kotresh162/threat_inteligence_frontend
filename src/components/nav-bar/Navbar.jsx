import React from 'react'
import logo_day from '../../assets/logo-black.png'
import logo_night from '../../assets/logo-white.png'
// import search_day from '../../assets/search-b.png'
import search_night from '../../assets/search-w.png'
import toggle_day from '../../assets/night.png'
import toggle_night from '../../assets/day.png'
import Styles from './Navbar.module.css'

const Navbar = ({theme,setTheme}) => {
  const toggle_theme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <div className={Styles.navbar}>
      <img src={theme === 'light' ? logo_day : logo_night} alt="" className={Styles.logo} />
      <ul>
        <li>Home</li>
        <li>Analysis</li>
        <li>AttackList</li>
        <li>About</li>
      </ul>
      <div className={Styles.searchbox}>
        <input type="text" placeholder='search' />
        <img src={search_night} alt="" />
      </div>
      <img onClick={() => { toggle_theme() }} src={theme == 'light' ? toggle_day : toggle_night} alt="" className={ Styles.toggle} />
    </div>
  )
}

export default Navbar