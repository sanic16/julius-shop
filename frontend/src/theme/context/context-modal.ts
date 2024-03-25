import { createContext } from "react";

export const modalContext = createContext({
    isModalOpen: false,
    openModalHandler: () => {},
    closeModalHandler: () => {} 
})



