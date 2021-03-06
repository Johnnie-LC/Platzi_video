import React from 'react'
import { connect } from 'react-redux'
import gravatar from '../utils/gravatar'
import classNames from 'classnames'
import { logoutRequest } from '../actions'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = (props) => {
  const { user, logoutRequest, isLogin, isRegister } = props
  //como user es un object debemos usar metodos de object
  //para determinar la cantidad de elementos que tiene un object (length)
  const hasUser = Object.keys(user).length > 0

  const handleLogo = () => {
    logoutRequest({})
  }

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  })

  return (
    <header className={headerClass}>
      <Link to="/Platzi_video/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img
              className="header__menu--profile-img"
              src={gravatar(user.email)}
              alt={user.email}
            />
          ) : (
            <img src={userIcon} alt="" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <Link to="/Platzi_video/">{user.email}</Link>
            </li>
          ) : null}

          {hasUser ? (
            <li>
              <a href="#logout" onClick={handleLogo}>
                Cerrar Sesión
              </a>
            </li>
          ) : (
            <li>
              <Link to="/Platzi_video/login">Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  )
}

const mapStateToProps = ({ user }) => ({ user })
const mapDispatchToProps = {
  logoutRequest,
}

Header.propTypes = {
  user: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
