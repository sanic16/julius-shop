import products from "../../assets/products"
import Product from "../../components/Product"
import './homePage.css'

const HomePage = () => {
  return (
    <section>
        <h1 className="heading__page">
            Últimos productos
        </h1>
        <div className="products container">
            {
                products.map(product => (
                    <Product
                        key={product._id}
                        {...product}
                    />
                ))
            }
        </div>

    </section>
  )
}

export default HomePage