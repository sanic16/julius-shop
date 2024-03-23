
const CartSummary = (
    {
        cartItems,
        onCheckout
    }:{
        cartItems: CartItem[],
        onCheckout?: () => void    
    }
) => {
  return (
    <div className="cart__bill">
        <h3>
            Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) 
        </h3>
        <div className="cart__bill-row">
            <span>Subtotal</span>
            <span>Q {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</span>
        </div>
        <div className="cart__bill-row">
            <span>Envío</span>
            <span>Q {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0) > 100 ? 0 : 10}            </span>
        </div>
        <div className="cart__bill-row">
            <span>Total</span>
            <span>Q {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</span>
        </div>
        <button
            className="btn"
            disabled={cartItems.length === 0}
            onClick={onCheckout}
        >
        Proceder al pago
        </button>
    </div>
  )
}

export default CartSummary