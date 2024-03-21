import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container footer__container">
            <article>
                <h4 className="footer__logo">
                    JuliusShop
                </h4>

                <p>
                    JuliusShop es una tienda en línea que ofrece una gran variedad de productos electrónicos.
                </p>

                <div className="footer__socials">
                    <a 
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FaTwitter />
                    </a>
                    <a 
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </article>
            <div>
                <h4>
                    Información
                </h4>
                <ul>
                    <li>
                        Correo: julio.sanic.gt.256@gmail.com
                    </li>
                    <li>
                        Teléfono: (502) 5838-5370
                    </li>
                    <li>
                        Sobre nosotros
                    </li>
                </ul>
            </div>

            <div>
                <h4>
                    Categorías
                </h4>
                <ul>
                    <li>
                        Computadoras
                    </li>
                    <li>
                        Celulares
                    </li>
                    <li>
                        Accesorios
                    </li>
                    <li>
                        Videojuegos
                    </li>
                    <li>
                        Televisores
                    </li>
                </ul>
            </div>

            <div>
                <h4>
                    Soporte
                </h4>
                <ul>
                    <li>
                        Preguntas frecuentes
                    </li>
                    <li>
                        Términos y condiciones
                    </li>
                    <li>
                        Políticas de privacidad
                    </li>
                    <li>
                        Contacto
                    </li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            <p>
                &copy; {new Date().getFullYear()} <span>JuliusShop</span>. Todos los derechos reservados.
            </p>
        </div>
    </footer>
  )
}

export default Footer