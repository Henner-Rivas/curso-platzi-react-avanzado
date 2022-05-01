import React from 'react'
import { FavsWithQuery } from '../hooks/GetFavorites'
import ListOfFavs from '../ListOfFavs'
import Helmet from 'react-helmet'
const Favs = () => {
  return (
    <>
      <Helmet>
      <title>Petrgram - Tu app Favoritos</title>
      <meta name='description' content='Con Petgram puedes encotrar fotos de animales domésticos my bonitos' />
    </Helmet>
  <h1> favs</h1>
  <FavsWithQuery/>
    </>
  )
}

export default Favs
