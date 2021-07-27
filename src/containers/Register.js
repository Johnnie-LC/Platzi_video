import React, { useState } from 'react'
import '../assets/styles/components/Register.scss'
import { Link } from 'react-router-dom'

const Register = () => {
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
  }

  return (
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
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
  )
}

export default Register
