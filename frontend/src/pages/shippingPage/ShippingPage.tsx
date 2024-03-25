import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../../store/slices/cartSlice'
import { useNavigate } from 'react-router-dom'
import { FaCity, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { GiGuatemala } from 'react-icons/gi'
import './shippingPage.css'
import { toast } from 'react-toastify'
import CheckoutSteps from '../../components/checkoutSteps/CheckoutSteps'

const ShippingPage = () => {
  const { shippingAddress } = useSelector((state: {cart: CartState}) => state.cart)

  const dispatch = useDispatch()
  const navigate = useNavigate()  
  const [address, setAddress] = useState<ShippingAddress>(
    shippingAddress.address ? shippingAddress : {
        address: '',
        city: '',
        country: 'Guatemala',
        postalCode: ''
    }
  )  

  
  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress((prevAddress) => ({
        ...prevAddress,
        [e.target.name]: e.target.value 
    }))
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!address.address || !address.city || !address.country || !address.postalCode){
        toast.error('Por favor llene todos los campos!')
        return
    }
    dispatch(saveShippingAddress(address))
    navigate('/payment')
  }
  return (
    <section className='shipping'>
        
        <div className='container shipping__container'>
            <CheckoutSteps step1 />
            <div className="form__container">
            <h2>
                Envío
            </h2>
            <form onSubmit={submitHandler} className='form'>
                <div className='form__group'>
                    <FaMapMarkerAlt />
                    <input
                        type='text'
                        name='address'
                        placeholder='Dirección'
                        value={address.address}
                        onChange={changeInputHandler}
                    />
                </div>
                <div className='form__group'>
                    <FaCity />
                    <input
                        type='text'
                        name='city'
                        placeholder='Ciudad'
                        value={address.city}
                        onChange={changeInputHandler}
                    />
                </div>
                <div className='form__group'>
                    <GiGuatemala />
                    <input
                        type='text'
                        name='country'
                        placeholder='País'
                        value={address.country}
                        onChange={changeInputHandler}
                    />
                </div>
                <div className='form__group'>
                    <FaEnvelope />
                    <input
                        type='text'
                        name='postalCode'
                        placeholder='Código postal'
                        value={address.postalCode}
                        onChange={changeInputHandler}
                    />
                </div>
                <button
                        className="btn"
                        type="submit"
                    >
                        Continuar
                    </button>
            </form>  
            </div>  
        </div>
    </section>
  )
}

export default ShippingPage