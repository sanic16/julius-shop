import { Link } from 'react-router-dom'
import Rating from './rating/Rating'

const Product = (
    {
        _id,
        name,
        image,
        price,
        rating,
        numReviews
    }: Product
) => {
    console.log(image)
  return (
    <div className='product'>
            <div className='product__header'>
                <div className='product__image'>
                    <img src={image} alt={name} />
                </div>
                <Link to={`/product/${_id}`}>
                    <h5>{name}</h5>
                </Link>
            </div>

            <div className='product__body'>
                
                <p className='product__rating'>
                    <Rating value={rating} text={`${numReviews} reviews`} />
                </p>
                <p className='product__price'>
                    Q{price}
                </p>
                <Link to={`/product/${_id}`} className='btn'>
                    Ver Producto
                </Link>
            </div>

    </div>
  )
}

export default Product