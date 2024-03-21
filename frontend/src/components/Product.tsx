import React from 'react'

const Product = (
    {
        _id,
        name,
        image,
        description,
        category,
        price,
        countInStock,
        rating,
        numReviews
    }: Product
) => {
  return (
    <div className='product'>
        <a href={`/product/${_id}`}>
            <div className='product__image'>
                <img src={image} alt={name} />
            </div>
            <div className='product__body'>
                <a href={`/product/${_id}`}>
                    <h3>{name}</h3>
                </a>
                <p>
                    ${price}
                </p>
            </div>
        </a>
    </div>
  )
}

export default Product