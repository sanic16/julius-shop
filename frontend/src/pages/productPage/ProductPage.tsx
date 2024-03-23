import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import './productPage.css'
import Rating from "../../components/rating/Rating"

import { useGetProductQuery } from "../../store/slices/productsApiSlice"
import LoaderText from "../../components/loader/LoaderText"
import { useEffect } from "react"
import Message from "../../components/message/Message"
import { useDispatch } from "react-redux"
import { addToCart } from "../../store/slices/cartSlice"

const ProductPage = () => {
  const { id } = useParams<{ id: string }>() 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [qty, setQty] = useState(1)



  const { data:product, isLoading, isError } = useGetProductQuery(id!)

  useEffect(() => {
    const body = document.querySelector('#root') as HTMLDivElement
    body.scrollIntoView({
        behavior: 'smooth'
    })
  })

  const addToCartHandler = () => {
    dispatch(addToCart({...product!, qty}))
    navigate('/cart')    
  }

  return (
    <section id="detail">
        <div className="container">
            <Link to="/" className="btn">Volver</Link>

            {
                isLoading ? <LoaderText /> : (isError || !product) ? <Message text="Error" variant="danger"/> : <div className="product__details">
                <div className="product__details-col1">
                    <div>
                        <img src={product?.image} alt={product?.name} />
                    </div>
                </div>
                <div className="product__details-col2">               
                    <h3>{product?.name}</h3>
                    <Rating
                        text={`${product?.numReviews} opiniones`}
                        value={product?.rating}
                    />
                    <p>
                        Precio: <b>${product?.price}</b>
                    </p>
                    <p>
                        Descripción: {product?.description}
                    </p>
                </div>
                <div className="product__details-col3">
                    <div>
                        <h5>Precio:</h5>
                        <span>${product?.price}</span>
                    </div>
                    <div>
                        <h5>Estado:</h5>
                        <span>{product?.countInStock > 0 ? 'En Stock' : 'Agotado'}</span>
                    </div>
                    
                        {
                            product.countInStock > 0 && (
                                <div>
                                    <h5>Cantidad:</h5>
                                    <select value={qty} onChange={(e) => setQty(parseInt(e.target.value))} className="qty">
                                        {
                                            [...Array((product.countInStock > 9 ? 6 : product.countInStock)).keys()].map(x => (
                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            
                            )
                        }
                        <div>
                            <button 
                                className={`btn ${product?.countInStock === 0 ? 'disabled' : ''}`}
                                disabled={product?.countInStock === 0}
                                onClick={addToCartHandler}
                            >
                                Añadir
                            </button> 
                    </div>
                </div>
            </div>
            }
        </div>
        
    </section>
  )
}

export default ProductPage