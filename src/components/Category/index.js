import React from 'react'
import { LinkRouter,Image } from './styles'
/* import image from   '../../../api/assets/category_birds.jpg'
 */
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'
 
  export const Category = ({ cover = DEFAULT_IMAGE, path='#', emoji = '?' }) => { 

   console.log("🚀 ~ file: index.js ~ line 10 ~ Category ~ path", path ? path : '')
   
  return (
     <LinkRouter to={path}>
           <Image src={cover} alt="" />
           {emoji}
     </LinkRouter>
    )
}

