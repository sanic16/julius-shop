import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Provider } from 'react-redux'
import store from './store/store.ts'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import HomePage from './pages/homePage/HomePage.tsx'
import ProductPage from './pages/productPage/ProductPage.tsx'
import CartPage from './pages/cartPage/CartPage.tsx'
import LoginPage from './pages/loginPage/LoginPage.tsx'
import RegisterPage from './pages/registerPage/RegisterPage.tsx'
import ShippingPage from './pages/shippingPage/ShippingPage.tsx'
import PrivateRoot from './components/privateRoot/PrivateRoot.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<HomePage />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />

      <Route path='/' element={<PrivateRoot />}>
        <Route path='/shipping' element={<ShippingPage />} />
      </Route>
    </Route> 
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store} >
      
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
