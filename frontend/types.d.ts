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

type ShippingAddress = {
    address: string,
    city: string,
    postalCode: string,
    country: string
}

type PaymentMethod = 'PayPal' | 'Banrural' | 'G&T' | 'BAC' | 'BI'

type CartState = {
    cartItems: CartItem[]
    itemsPrice: number,
    shippingPrice: number,
    taxPrice: number,
    totalPrice: number,
    paymentMethod: PaymentMethod,
    shippingAddress: ShippingAddress
}

type UserInfo = {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
} | null

type AuthState = {
    userInfo: UserInfo
}

interface AuthUser {    
    email: string,
    password: string
}

interface RegisterUser extends AuthUser {
    name: string
}

type Primary = 'color-1' | 'color-2' | 'color-3' | 'color-4' | 'color-5' | 'color-6' | 'color-7' | 'color-8'
type Background = 'background-1' | 'background-2'

type Theme = {
    primary: Primary,
    background: Background
}

type ThemeContext = {
    theme: Theme,
    setTheme: (theme: Primary | Background) => void
}