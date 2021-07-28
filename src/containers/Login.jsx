import React, { useState } from 'react'
import { connect } from 'react-redux'
import { loginRequest } from '../actions'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'
import '../assets/styles/components/Login.scss'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  })

  // los corchete en el funcionan para obtner de forma dinamica la informacion
  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    props.loginRequest(form)
    props.history.push('/')
  }
  return (
    <>
      <Header isLogin />
      <section className="login">
        <section className="login__container">
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
            />
            <button className="button">Iniciar Sesión</button>
            <div className="login__container--remember-me">
              <label htmlFor="">
                <input type="checkbox" id="cbox1" value="first_checkbox" />{' '}
                Recuerdame
              </label>
              <Link to="/">Olvidé mi contraseña</Link>
            </div>
          </form>
          <section className="login__container--social-media">
            <div>
              <img src={googleIcon} alt="ini google" />
              Iniciar sesión con Google
            </div>
            <div>
              <img src={twitterIcon} alt="ini Twitter" />
              Iniciar sesión con Twitter
            </div>
          </section>
          <p className="login__container--register">
            No tienes ninguna cuenta <Link to="/register">Regístrate</Link>
          </p>
        </section>
      </section>
    </>
  )
}

const mapDispatchToProps = { loginRequest }

export default connect(null, mapDispatchToProps)(Login)
