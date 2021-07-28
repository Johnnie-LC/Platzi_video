import React from 'react'
import '../assets/styles/components/Search.scss'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { getVideoSearch } from '../actions'

const Search = (props) => {
  const { isHome, getVideoSearch } = props

  const inputStyle = classNames('input', {
    isHome,
  })

  const handleInput = (e) => {
    getVideoSearch(e.target.value)
  }
  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        type="text"
        className={inputStyle}
        placeholder="Buscar..."
        onKeyUp={handleInput}
      />
    </section>
  )
}

const mapDispatchToProps = {
  getVideoSearch,
}
export default connect(null, mapDispatchToProps)(Search)
