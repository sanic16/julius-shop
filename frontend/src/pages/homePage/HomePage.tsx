import { useEffect, useState } from "react"
import axios from 'axios'
import Product from "../../components/Product"
import './homePage.css'

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    const fetchProducts = async () => {
        const response = await axios.get('/api/products')
        setProducts(response.data)
    }
    fetchProducts()
  }, [])  
  return (
    <section>
        <div className="container">
            <h1 className="heading__page">
                Últimos productos
            </h1>
            <div className="products">
                {
                    products.map(product => (
                        <Product
                            key={product._id}
                            {...product}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default HomePage