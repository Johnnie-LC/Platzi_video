import React from 'react'
import '../assets/styles/components/Player.scss'

// to back a before pages, we can use the props.history.goBack()

const Player = (props) => {
  const { history } = propss
  //the id comes from the route
  const { id } = props.match.params

  return (
    <div className="Player">
      <video controls autoPlay>
        <source src="" type="video/mp4" />
      </video>

      <div className="Player-back">
        <button type="button" onClick={() => history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  )
}

export default Player
