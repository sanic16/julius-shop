import products from "../../assets/products"
import Product from "../../components/Product"
import './homePage.css'

const HomePage = () => {
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