import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import '../assets/styles/App.scss'
import Header from '../components/Header'

const Home = ({ myList, trends, originals, searchResult }) => {
  console.log(' MyList: ', myList)
  console.log('searchResult: ', searchResult)
  return (
    <>
      <Header />
      <Search isHome />

      {myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map((item) => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}

      {searchResult.length > 0 && (
        <Categories title="Resultados de la busqueda...">
          <Carousel>
            {searchResult.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  )
}

const mapStateToProps = ({ myList, trends, originals, searchResult }) => ({
  myList,
  trends,
  originals,
  searchResult,
})

export default connect(mapStateToProps, null)(Home)
