import React, { useState } from 'react'
import { connect } from 'react-redux'
import '../assets/styles/components/Register.scss'
import { Link } from 'react-router-dom'
import { registerRequest } from '../actions'
import Header from '../components/Header.jsx'
const Register = (props) => {
  const { registerRequest, history } = props

  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  })

  // we are going to make a update input const
  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    // actualizar el estado para que no funcione lor forms
    e.preventDefault()
    console.log(form)
    registerRequest(form)
    history.push('/')
  }
  console.log('props: ', props.history)
  return (
    <>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Nombre"
              onChange={handleInput}
            />
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
            <button className="button">Registrarme</button>
          </form>
          <Link to="/Platzi_video/login">Iniciar sesión</Link>
        </section>
      </section>
    </>
  )
}
const mapDispatchToProps = {
  registerRequest,
}

export default connect(null, mapDispatchToProps)(Register)
