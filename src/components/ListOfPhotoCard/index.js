import React from 'react'
import { PhotoCard } from '../PhotoCard'

const ListOfPhotoCard = () => {
  return (
    <div>
{  
[1,2,5,3,,6,33,6].map((id ,key)=>(
   <PhotoCard id={id} key={key}/>
))
}
    </div>
  )
}

export default ListOfPhotoCard
