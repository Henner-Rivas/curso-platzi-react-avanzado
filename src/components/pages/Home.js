import React from 'react'
import ListOfCategory from '../ListOfCategory'
import ListOfPhotoCard from '../ListOfPhotoCard'
import { useParams } from 'react-router-dom'
export const Home = () => {
  const { id } = useParams()


  return (
    <>
    <ListOfCategory />
   <ListOfPhotoCard categoryId={id} />
    </>
  )
}

export default Home
