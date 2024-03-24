import { FaBars, FaShoppingCart, FaUser } from 'react-icons/fa'
import './header.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const { cartItems } = useSelector((state: {cart: CartState}) => state.cart as CartState)
  const { userInfo } = useSelector((state: {auth: AuthState}) => state.auth as AuthState)  
  const qty = cartItems.reduce((acc, item) => acc + item.qty, 0)

  const logoutHandler = () => {
    console.log('logout')
  }
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
                    <FaShoppingCart />{qty > 0 ? <span className='nav__cart-qty'>({qty})</span> : null }Carrito                            
                    </Link> 
                </li>
                {
                    userInfo ? (
                        <li className='nav__menu-user'>
                            <Link to={'/profile'} className='nav__menu-item'>
                                <FaUser /> {userInfo.name}
                            </Link> 
                            <div className='nav__menu-user-menu'>
                                <ul>
                                    <li>
                                        <Link to={'/profile'}>Perfil</Link>
                                    </li>
                                    <li onClick={logoutHandler}>
                                        <a>Cerrar sesión</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    ) : (
                        <li>
                            <Link to={'/login'} className='nav__menu-item'>
                                <FaUser /> Iniciar sesión
                            </Link> 
                        </li>
                    )
                }
                
            </ul>

            <button className='nav__toggle-btn'>
                <FaBars />
            </button>
            
        </div>
    </nav>
  )
}

export default Header
