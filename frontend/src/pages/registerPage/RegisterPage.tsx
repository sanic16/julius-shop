import { useState, useEffect } from "react"
import './registerPage.css'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useRegisterMutation } from "../../store/slices/usersApiSlice"
import { setCredentials } from "../../store/slices/authSlice"
import { toast } from "react-toastify"

const RegisterPage = () => {

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })  

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [register, { isLoading }] = useRegisterMutation()
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
    if(userData.password !== userData.confirmPassword){
        toast.error('Las contraseñas no coinciden!')
        return
    }
    try {
        const res = await register({
            name: userData.username,
            email: userData.email,
            password: userData.password
        }).unwrap()

        if(!res) throw new Error('Error al ingresar!')

        dispatch(setCredentials({
            _id: res._id,
            name: res.name,
            email: res.email,
            isAdmin: res.isAdmin            
        }))
        toast.success('Ingresado correctamente!')
        navigate(redirect)
    } catch (error) {
        toast.error('Error al ingresar!')
    }  
  }


  return (
    <section className='login'>
        <div className="container login__container">
            <h2>
                Registrarse
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
                    type="text"
                    placeholder="Nombre de usuario"
                    name="username"
                    value={userData.username}
                    onChange={handleInputChange}
                />

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
                <input
                    type="password"
                    placeholder="Confirmar Contraseña"
                    name="confirmPassword"
                    value={userData.confirmPassword}
                    onChange={handleInputChange}
                />
                {
                    isLoading ? (
                        <button
                            className="btn disabled"
                            type="submit"
                            disabled
                        >
                            Registrando...
                        </button>
                    ): (                        
                        <button
                        className="btn"
                        type="submit"
                    >
                        Registrarse
                    </button>
                    ) 
                }
            </form>
            <small>
                Ya tienes una cuenta? {' '} 
                <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                    Iniciar sesión
                </Link>
            </small>
        </div>
    </section>
  )
}

export default RegisterPage