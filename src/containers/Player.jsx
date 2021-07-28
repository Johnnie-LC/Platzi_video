import React, { useEffect, useState } from 'react'
import '../assets/styles/components/Player.scss'
import { connect } from 'react-redux'
import { getVideoSource } from '../actions'
import { Redirect } from 'react-router-dom'
// to back a before pages, we can use the props.history.goBack()

const Player = (props) => {
  const { history, playing, getVideoSource } = props
  //the id comes from the route
  const { id } = props.match.params
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getVideoSource(id)
    setLoading(false)
  }, [])

  if (loading) {
    return <h1>Cargando Video...</h1>
  }
  // validar la informacion, si hay un video o no
  const hasPlaying = Object.keys(playing).length > 0

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={playing.source} type="video/mp4" />
      </video>

      <div className="Player-back">
        <button type="button" onClick={() => history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <Redirect to="/404/" />
  )
}

const mapStateToProps = ({ playing }) => ({ playing })
const mapDispatchToProps = {
  getVideoSource,
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)
