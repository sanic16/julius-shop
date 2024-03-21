import { FaBars, FaShoppingCart, FaUser } from 'react-icons/fa'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='nav'>
        <div className="container nav__container">
            <div className="nav__logo">
                <Link to={'/'}>
                    JuliusShop
                </Link>
            </div>

            <ul className="nav__menu">
                <li>
                    <Link to={'/cart'} className='nav__menu-item'>
                        <FaShoppingCart /> Carrito
                    </Link> 
                </li>
                <li>
                    <Link to={'/login'} className='nav__menu-item'>
                        <FaUser /> Iniciar sesión
                    </Link> 
                </li>
            </ul>

            <button className='nav__toggle-btn'>
                <FaBars />
            </button>
            
        </div>
    </nav>
  )
}

export default Header
