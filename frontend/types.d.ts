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

