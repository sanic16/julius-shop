import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { savePaymentMethod } from '../../store/slices/cartSlice'
import CheckoutSteps from '../../components/checkoutSteps/CheckoutSteps'
import './paymentPage.css'
import { useNavigate } from 'react-router-dom'

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('PayPal')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { shippingAddress } = useSelector((state : {cart: CartState}) => state.cart)

  useEffect(() => {
    if(!shippingAddress.address){
        navigate('/shipping')
    }
  }, [shippingAddress, navigate])

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('')    
  }

  return (
    <section className='payment'>        
        <div className='container payment__container'>
            <CheckoutSteps step1 step2/>
            <div className="form__container">
            <h2>
                Método de Pago
            </h2>
            <form className='form' onSubmit={submitHandler}>
                <div className='form__group'>
                    <input
                        type='radio'
                        id='paypal'
                        name='paymentMethod'
                        value='PayPal'
                        checked={paymentMethod === 'PayPal'}
                        onChange={() => setPaymentMethod('PayPal')}
                    />
                    <label htmlFor='paypal'>PayPal ó Tarjeta de Crédito</label>
                </div>
                <div className='form__group'>
                    <input
                        type='radio'
                        id='banrural'
                        name='paymentMethod'
                        value='Banrural'
                        checked={paymentMethod === 'Banrural'}
                        onChange={() => setPaymentMethod('Banrural')}
                    />
                    <label htmlFor='banrural'>Banrural</label>
                </div>
                <div className='form__group'>
                    <input
                        type='radio'
                        id='gt'
                        name='paymentMethod'
                        value='G&T'
                        checked={paymentMethod === 'G&T'}
                        onChange={() => setPaymentMethod('G&T')}
                    />
                    <label htmlFor='gt'>G&T</label>
                </div>
                <div className='form__group'>
                    <input
                        type='radio'
                        id='bac'
                        name='paymentMethod'
                        value='BAC'
                        checked={paymentMethod === 'BAC'}
                        onChange={() => setPaymentMethod('BAC')}
                    />
                    <label htmlFor='bac'>BAC</label>
                </div>
                <div className='form__group'>
                    <input
                        type='radio'
                        id='bi'
                        name='paymentMethod'
                        value='BI'
                        checked={paymentMethod === 'BI'}
                        onChange={() => setPaymentMethod('BI')}
                    />
                    <label htmlFor='bi'>BI</label>
                </div>
                <button type='submit' className='btn btn--primary'>
                    Continuar
                </button>
            </form>
            </div>
        </div>
    </section>
  )
}

export default PaymentPage