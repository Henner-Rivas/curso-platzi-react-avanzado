import React from 'react'
import { Category } from './components/Category'
import ListOfCategory from './components/ListOfCategory'
import ListOfPhotoCard from './components/ListOfPhotoCard'
import { Logo } from './components/logo'
import { PhotoCard } from './components/PhotoCard'
import { GlobalStyle } from './GlobalStyles'

const App = () => {
  return (
    <>
    <Logo/>
    <GlobalStyle/>
    <ListOfCategory />
   <ListOfPhotoCard />
     <div>App</div>
   </>

  )
}

export default App
