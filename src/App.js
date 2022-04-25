import React from 'react'
import { Category } from './components/Category'
import ListOfCategory from './components/ListOfCategory'
import ListOfPhotoCard from './components/ListOfPhotoCard'
import { Logo } from './components/logo'
import { PhotoCard } from './components/PhotoCard'
import { GlobalStyle } from './styles/GlobalStyles'
import PhotoCardWithQuery from './components/container/PhotoCardWithQuery'
/* import {PhotoCardWithQuery} from './components/container/PhotoCardWithQuery'
 */const App = () => {
  const urlParams= new window.URLSearchParams(window.location.search);
   const detailid= urlParams.get('detail');
/*    {
     deaild ?  <h1>Detail Id</h1>: 
      <>

    <Logo/>
    <GlobalStyle/>
    <ListOfCategory />
   <ListOfPhotoCard categoryId={1} />
     <div>App</div>
   
     
     </>
   } */

  return (
    detailid ? <>
        <Logo/>
    <GlobalStyle/>
    <ListOfCategory />
    <PhotoCardWithQuery id={detailid}/>
    </>  :
    <>

    <Logo/>
    <GlobalStyle/>
    <ListOfCategory />
   <ListOfPhotoCard categoryId={1} />
     <div>App</div>
   
     
     </>
  ) 
}

export default App
