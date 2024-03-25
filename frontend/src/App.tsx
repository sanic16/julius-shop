import Footer from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ThemeModal from "./theme/themeModal/ThemeModal"
import useContextTheme from "./hooks/useContextTheme"


const App = () => {
  const { theme } = useContextTheme()
  return (
    <>
      <div className={`theme ${theme.primary} ${theme.background}`}>
      <Header />
        <main>
          <Outlet />
        </main>
      <Footer />
      </div>
      <ToastContainer
        autoClose={2000}
      />
      <ThemeModal />
    </>
  )
}

export default App