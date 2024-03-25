import { useContext } from "react";
import { themeContext } from "../theme/context/context-theme";

const useContextTheme = () => useContext(themeContext)

export default useContextTheme