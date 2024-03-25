import { useNavigate } from 'react-router-dom'
import './checkoutSteps.css'

const CheckoutSteps = (
    {
        step1,
        step2,
        step3,        
    }:{
        step1: boolean,
        step2?: boolean,
        step3?: boolean,
    }
) => {
  const navigate = useNavigate()  
  return (
    <div className="checkout__steps">
            
            <button
                className={step1 ? 'active' : '' }
                onClick={() => navigate('/shipping')
            }
            >
                Envío
            </button>
            <button
                
                className={step2 ? 'active' : '' }
                onClick={() => navigate('/payment')}
                disabled={!step2}
            >
                Pago
            </button>
            <button
                className={step3 ? 'active' : '' }
                onClick={() => navigate('/placeorder')}
                disabled={!step3}
            >
                Ordenar
            </button>

            
    </div>
  )
}

export default CheckoutSteps