interface Product  {
    _id: string
    name: string
    image: string
    category: string
    description: string 
    rating: number
    countInStock: number
    price: number
    numReviews: number
}

interface FetchedProduct extends Product {
    user: string,
    brand: string,        
    reviews: string[],        
    createdAt: string,
    updatedAt: string,
}

interface CartItem extends FetchedProduct {
    qty: number
}

type CartState = {
    cartItems: CartItem[]
    itemsPrice: number,
    shippingPrice: number,
    taxPrice: number,
    totalPrice: number,
}