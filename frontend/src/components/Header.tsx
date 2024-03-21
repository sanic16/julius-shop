import { FaShoppingCart, FaUser } from 'react-icons/fa'
import './header.css'

const Header = () => {
  return (
    <nav className='nav'>
        <div className="container nav__container">
            <div className="nav__logo">
                <a href={'/'}>
                    JuliusShop
                </a>
            </div>

            <ul className="nav__menu">
                <li>
                    <a href={'/cart'} className='nav__menu-item'>
                        <FaShoppingCart /> Carrito
                    </a> 
                </li>
                <li>
                    <a href={'/login'} className='nav__menu-item'>
                        <FaUser /> Iniciar sesión
                    </a> 
                </li>
            </ul>
            
        </div>
    </nav>
  )
}

export default Header
