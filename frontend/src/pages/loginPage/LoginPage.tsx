import { useState, useEffect } from "react"
import './loginPage.css'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
// import Message from "../../components/message/Message"
import { useLoginMutation } from "../../store/slices/usersApiSlice"
import { setCredentials } from "../../store/slices/authSlice"
import { toast } from "react-toastify"

const LoginPage = () => {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })  

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()
  const { userInfo } = useSelector((state: {auth: AuthState}) => state.auth) 

  const { search } = useLocation()
  
  const sp = new URLSearchParams(search)
  const redirect = sp.get('redirect') || '/'

  useEffect(() => {   
    if(userInfo){
        navigate(redirect)
    } 
  },[navigate, redirect, userInfo])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value
    }))
    console.log(`${e.target.name}: ${e.target.value}`)
  }

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
        const res = await login({
            email: userData.email,
            password: userData.password
        }).unwrap()
        dispatch(setCredentials({
            _id: res._id,
            name: res.name,
            email: res.email,
            isAdmin: res.isAdmin            
        }))
        toast.success('Ingresado correctamente!')
        navigate(redirect)
    } catch (error) {
        toast.error('Error')
    }  
  }


  return (
    <section className='login'>
        <div className="container login__container">
            <h2>
                Iniciar Sesión
            </h2>
            <form 
                className='form login__form'
                onSubmit={submitHandler}
            >
                {/* {
                    error && (
                        <p className="form__error-message">
                            { error}
                        </p>
                    )
                } */}
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    autoFocus
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                />
                {
                    isLoading ? (
                        <button
                            className="btn disabled"
                            type="submit"
                            disabled
                        >
                            Iniciando sesión
                        </button>
                    ): (                        
                        <button
                        className="btn"
                        type="submit"
                    >
                        Iniciar sesión
                    </button>
                    ) 
                }
            </form>
            <small>
                ¿No tienes cuenta aún ? 
                <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                    Registrate
                </Link>
            </small>
        </div>
    </section>
  )
}

export default LoginPage