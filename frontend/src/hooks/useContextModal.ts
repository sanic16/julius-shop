import { useContext } from "react";
import { modalContext } from "../theme/context/context-modal";

const useModalContext = () => useContext(modalContext)

export default useModalContext