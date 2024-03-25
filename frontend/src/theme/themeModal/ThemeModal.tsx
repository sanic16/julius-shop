import Modal from "../modal/Modal";
import './themeModal.css'
import { primaryColors, backgroundColors } from "./themeData";
import Primary from "./Primary";
import Background from "./Background";

const ThemeModal = () => {
    return (
        <Modal className="theme__modal">
            <div className="theme__modal-container">
                <div className="theme__modal-primary">
                    <h4>
                        Color primario de la página
                    </h4>
                    <div className="theme__modal-primary-color">
                        {
                            primaryColors.map(primary => (
                                <Primary key={primary} className={primary} />
                            ))
                        }
                    </div>
                </div>  
                <div className="theme__modal-background">
                    <h4>
                        Color de fondo de la página
                    </h4>
                    <div className="theme__modal-background-color">
                        {
                            backgroundColors.map(background => (
                                <Background key={background} className={background} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ThemeModal