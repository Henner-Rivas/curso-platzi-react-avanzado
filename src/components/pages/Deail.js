import React from 'react'
import { useParams } from 'react-router-dom'
import PhotoCardWithQuery from '../container/PhotoCardWithQuery'

const Deail = () => {
 const {detailId}= useParams()
  
  return (
    <div>

      <PhotoCardWithQuery id={detailId}/>
    </div>
  )
}

export default Deail
