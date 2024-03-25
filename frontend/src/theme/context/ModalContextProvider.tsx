import { useState } from "react";
import { modalContext } from "./context-modal";

const ModalContextProvider = (
    {
        children
    }:{
        children: React.ReactNode
    }
) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModalHandler = () => {
        setIsModalOpen(true)
    }
    const closeModalHandler = () => {
        setIsModalOpen(false)
    }
    return (
        <modalContext.Provider
            value={{
                isModalOpen,
                openModalHandler,
                closeModalHandler
            }}
        >
            { children }
        </modalContext.Provider>
    )
}

export default ModalContextProvider