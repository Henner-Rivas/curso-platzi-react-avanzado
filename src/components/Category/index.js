import React from 'react'
import { Anchor,Image } from './styles'
/* import image from   '../../../api/assets/category_birds.jpg'
 */
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'
 Anchor
export const Category = ({category}) => {

   let {path,cover,emoji}= category;
  return (
     <Anchor href={path}>
           <Image src={cover} alt="" />
           {emoji}
     </Anchor>
    )
}

