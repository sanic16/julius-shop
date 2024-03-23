import { Link } from "react-router-dom"
import { FaTrash } from "react-icons/fa"


const CartItem = (
    {
        item,
        onRemoveItem,
        onAddToCart
    }:{
        item: CartItem
        onRemoveItem?: (id: string) => void,
        onAddToCart?: (item: CartItem, qty: number) => void
    }
) => {
  return (
    <div key={item._id} className="cart__item">
        <div className="cart__item-image">
            <img src={item.image} alt={item.name} />
        </div>
        <div className="cart__item-info">
            <h5>
                <Link to={`/product/${item._id}`}>
                    {item.name}
                </Link>
            </h5>
            <div className="cart__item-qty">
                    <p>Precio: ${item.price}</p>
                    <div>
                        
                        <div className="selector">
                            <p>Cantidad: {item.qty}</p>
                            <select 
                                value={item.qty}  
                                className="qty" 
                                onChange={(e) => {
                                    onAddToCart && onAddToCart(item, Number(e.target.value))
                                }}>
                                {
                                    [...Array((item.countInStock > 9 ? 6 : item.countInStock)).keys()].map(x => (
                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <button
                        className="btn"
                        onClick={() => onRemoveItem && onRemoveItem(item._id)}
                    >
                        <FaTrash />
                    </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem