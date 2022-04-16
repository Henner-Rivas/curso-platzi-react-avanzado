import React from 'react'
/* import image from   '../../../api/assets/category_birds.jpg'
 */
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'
 
export const Category = ({cover=DEFAULT_IMAGE,path,emoji='?'}) => {
  return (
     <a href={path}>
           <img src={cover} alt="" />
           {emoji}
     </a>
    )
}

