import React from 'react'
import { FavsWithQuery } from '../hooks/GetFavorites'
import ListOfFavs from '../ListOfFavs'

const Favs = () => {
  return (
    <div>
  <h1> favs</h1>
  <FavsWithQuery/>
    </div>
  )
}

export default Favs
