import React from 'react'
import { connect } from 'react-redux'
import { setFavorite, deleteFavorite } from '../actions'
import PropTypes from 'prop-types'
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'
import removeIcon from '../assets/static/remove.png'
import { Link } from 'react-router-dom'

const CarouselItem = (props) => {
  const { cover, title, year, contentRating, duration, id, isList } = props

  const handleSetFavorite = (e) => {
    console.log('Agregar ', e.target.disabled)
    props.setFavorite({
      cover,
      title,
      year,
      contentRating,
      duration,
      id,
    })
    document.getElementById(id).style.display = 'none'
  }

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId)
    document.getElementById(id).style.display = 'inline'
  }
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/Platzi_video/player/${id}`}>
            <img
              className="carousel-item__details--img"
              src={playIcon}
              alt="Play Icon"
            />
          </Link>
          {isList ? (
            <img
              className="carousel-item__details--img"
              src={removeIcon}
              alt="Remove Icon"
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Plus Icon"
              onClick={handleSetFavorite}
              id={id}
            />
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  )
}

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
}
export default connect(null, mapDispatchToProps)(CarouselItem)
