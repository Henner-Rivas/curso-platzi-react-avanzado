import React from 'react'
import { useParams } from 'react-router-dom'
import PhotoCardWithQuery from '../container/PhotoCardWithQuery'
import { Layout } from '../Layout'

const Deail = () => {
 const {detailId}= useParams()
  
  return (
    <Layout title={`Fotografia ${detailId}`}>

      <PhotoCardWithQuery id={detailId}/>
    </Layout>
  )
}

export default Deail
