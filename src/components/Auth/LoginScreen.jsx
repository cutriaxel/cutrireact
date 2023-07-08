import React, { useContext, useState } from 'react'
import './LoginScreen.scss';
import { AuthContext } from '../../Context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'

const LoginScreen = () => {
    const { login, googleLogin } = useContext(AuthContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
    }

    return (
        <div className='auth-container'>
            <div className='auth-modal'>
                <h2>Iniciar Sesion</h2>
                <hr />

                <form onSubmit={handleSubmit}>
                    <input
                        value={values.email}
                        onChange={handleInputChange}
                        type='email'
                        placeholder='Email'
                        className='form-control my-2'
                        name='email'
                    />
                    <input
                        value={values.password}
                        onChange={handleInputChange}
                        type='password'
                        placeholder='Contraseña'
                        className='form-control my-2'
                        name='password'
                    />
                    <div className='inicio_container'>
                        <button className='btn boton' style={{ backgroundColor: "#40a640" }} type='submit'>Iniciar sesión</button>
                      <button className='btn boton' style={{ backgroundColor: "#ffff" }}> <Link style={{ color: "black" }} to="/register">Registrarme</Link></button> 
                    </div>

                </form>
                <div className='inicio_google'>
                    <button className='btn btn-primary google-btn' onClick={googleLogin}>
                        <FontAwesomeIcon icon={faGoogle} className='google-icon' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen;

