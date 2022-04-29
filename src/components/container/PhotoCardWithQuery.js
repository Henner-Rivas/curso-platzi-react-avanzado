import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { gql, useQuery } from '@apollo/client'
import { Loader } from '../../styles/Loader'

const getSinglePhoto = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export default function PhotoCardWithQuery({ id }) {
  console.log(id)
  const { loading, error, data } = useQuery(getSinglePhoto, {
    variables: {
      id: id
    }
  })
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <Loader/>
  }

  return (
    <PhotoCard {...data.photo} />
  )
}
