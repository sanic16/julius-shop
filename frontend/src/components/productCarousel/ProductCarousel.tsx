import { useNavigate } from 'react-router-dom'
import { useGetTopProductsQuery } from '../../store/slices/productsApiSlice'
import './productCarousel.css'
import LoaderText from '../loader/LoaderText'



const ProductCarousel = () => {
  const navigate = useNavigate()  
  const { data: products, isLoading, isError } = useGetTopProductsQuery()
  return (
    <div className='banner__wrapper'>
    <div className="banner">
        <div className="slideshow">                    
                {
                    isLoading ? <div className='loader__center'><LoaderText /></div> : (isError || !products) ? <h2>Error</h2> : (
                        <>
                        <button className='slide-btn slide-btn-1'></button>
                        <button className='slide-btn slide-btn-2'></button>
                        <button className='slide-btn slide-btn-3'></button>
                        <button className='slide-btn slide-btn-4'></button>
                        <button className='slide-btn slide-btn-5'></button>
                        <div className="slideshow__wrapper">
                            {products.map(product => (
                                <div className="slide" key={product._id}>
                                    <div>
                                        <img src={product.image} />
                                    </div>
                                    <div>
                                        <h2>{product.name}</h2>
                                        <p>
                                            {product.description.substring(0, 100)}...
                                        </p>
                                        <button
                                            onClick={() => navigate(`/product/${product._id}`)}
                                        >
                                            Comprar
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        </>
                    )
                }                         
        </div>
    </div>
    </div>
  )
}

export default ProductCarousel