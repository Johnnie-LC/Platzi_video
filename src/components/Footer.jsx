import React from 'react'
import '../assets/styles/components/Footer.scss'
import { Link } from 'react-router-dom'
const Footer = () => (
  <footer className="footer">
    <Link to="/Platzi_video/">Terminos de uso</Link>
    <Link to="/Platzi_video/">Declaración de privacidad</Link>
    <Link to="/Platzi_video/">Centro de ayuda</Link>
  </footer>
)

export default Footer
