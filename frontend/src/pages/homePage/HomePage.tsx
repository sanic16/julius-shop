import { useGetProductsQuery } from "../../store/slices/productsApiSlice"

import Product from "../../components/Product"
import './homePage.css'
import LoaderText from "../../components/loader/LoaderText"
import Message from "../../components/message/Message"
import ProductCarousel from "../../components/productCarousel/ProductCarousel"

const HomePage = () => {
  
  const { data: products, isLoading, isError } = useGetProductsQuery() 

  
  
  return (
    <section>
        <div className="container">
            <ProductCarousel />
            <h1 className="heading__page">
                Últimos productos
            </h1>
            {
                isLoading ? <LoaderText /> : (isError || !products ) ? <Message text="error" variant="danger"/>: <div className="products">
                {
                    products.map(product => (
                        <Product
                            key={product._id}
                            {...product}
                        />
                    ))
                }
            </div>
            }
        </div>
    </section>
  )
}

export default HomePage