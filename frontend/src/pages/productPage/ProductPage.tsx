import { Link, useParams } from "react-router-dom"
import products from "../../assets/products"

import './productPage.css'
import Rating from "../../components/rating/Rating"

const ProductPage = () => {
  const { id:productId } = useParams<{ id: string }>() 
  const product = products.find(product => product._id === productId) 
  if (!product) {
    return (
        <section>
            <h1>
                Product Not Found
            </h1>
        </section>
    )
  }
  return (
    <section>
        <div className="container">
            <Link to="/" className="btn">Volver</Link>

            <div className="product__details">
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
                    <div>
                        <button 
                            className={`btn ${product?.countInStock === 0 ? 'disabled' : ''}`}
                            disabled={product?.countInStock === 0}
                        >
                            Añadir al Carrito
                        </button> 
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default ProductPage