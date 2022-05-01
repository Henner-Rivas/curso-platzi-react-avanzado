import React from 'react'
import ListOfCategory from '../ListOfCategory'
import ListOfPhotoCard from '../ListOfPhotoCard'
import { useParams } from 'react-router-dom'
import Helmet from 'react-helmet'
export const Home = () => {
  const { id } = useParams()


  return (
    <>
    <Helmet>
      <title>Petrgram - Tu app de fotos de mascotas</title>
      <meta name='description' content='Con Petgram puedes encotrar fotos de animales domésticos my bonitos' />
    </Helmet>
    <ListOfCategory />
   <ListOfPhotoCard categoryId={id} />
    </>
  )
}

export default Home
