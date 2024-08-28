import './styles/header.css'

export function Header (){
  return (
    <ul className='container-of-header'>
      <li className="button pokemon"><a href="">Pokemon</a></li>
      {/* <li className="button habilidades"><a href="">Habilidades</a></li>
      <li className="button movimientos"><a href="">Movimientos</a></li>
      <li className="button objetos"><a href="">Objetos</a></li>
      <li className="button bayas"><a href="">Bayas</a></li> */}
      <li className="button portfolio"><a href="https://portafolio-carlos-projects-0bccc0e3.vercel.app/">Portfolio</a></li>
    </ul>
  )
}