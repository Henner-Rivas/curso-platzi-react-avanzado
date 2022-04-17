import React from 'react'
import { PhotoCard } from '../PhotoCard'

const ListOfPhotoCard = () => {
  return (
    <div>
{  
[1,2,5].map(photoCard=>(
   <PhotoCard />
))
}
    </div>
  )
}

export default ListOfPhotoCard
