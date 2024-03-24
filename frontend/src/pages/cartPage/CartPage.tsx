import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../../store/slices/cartSlice"
import Message from "../../components/message/Message"

import './cartPage.css'
import CartItem from "./CartItem"
import CartSummary from "./CartSummary"

const CartPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cart = useSelector((state: { cart: CartState }) => state.cart)
  const { cartItems } = cart

  const addToCartHandler = (item: CartItem, qty: number) => {
    console.log(item, qty)
    dispatch(addToCart({...item, qty}))
  }

  const removeFromCartHandler = (id: string) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping')
  }
    

  return (
    <section className="cart" id="cart">
      <div className="container cart__container">

        <h1 className="heading__page">
          Carrito de compras
        </h1>

        {
          cartItems.length === 0 ? (
            <>
              <Message
                text="Tu carrito está vacío"
                variant="warning"
              />
              <Link to="/" className="btn">Volver</Link>
            </> 
            ) : (
              <div className="cart__summary">
                <div className="cart__info">                  
                    
                    {
                      cartItems.map(item => (
                        <CartItem
                          key={item._id}
                          item={item}
                          onAddToCart={addToCartHandler}
                          onRemoveItem={removeFromCartHandler}
                        />
                      ))
                    }
                       
                </div> 
                
                <CartSummary 
                  cartItems={cartItems} 
                  onCheckout={checkoutHandler}
                />
               
              </div>
            )
          }
      </div>
    </section>
  )
}

export default CartPage