import { useState } from 'react';
import './styles/HeaderMobile.css'
import { MenuSvg } from "./svgs/menu";
import { Link } from 'react-router-dom';

export function HeaderMobile(){
  const [OpenMenu, setOpenMenu] = useState(false)

  const toggleOpenMenu = ()=>{
    setOpenMenu(!OpenMenu)
  }
  console.log(OpenMenu)

  return(
    <header className='header-mobile'>
      <button type="button" className='button-menu-mobile' onClick={toggleOpenMenu}>
        Pokedex<MenuSvg/>
      </button>
      <ul className={`menu-displayed ${OpenMenu ? 'open-menu' : false}`}>
        <li>
          <Link to='/' className='link-mobile pokemon'>Pokemon</Link>
        </li>
        <li>
          <a href="https://portafolio-lake-sigma.vercel.app" className='link-mobile portfolio'>Portfolio</a>
        </li>
      </ul>
    </header>
  )
}