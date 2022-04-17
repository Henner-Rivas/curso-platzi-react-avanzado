import React from 'react'
import { Button, Img, ImgWrapper } from './styles'
import {MdFavoriteBorder} from 'react-icons/md'
export const PhotoCard = ({id}) => {
  const DEFAULT_IMAGE='https://images.unsplash.com/photo-1515619363794-e826f7de3487?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

  return (
    <article>
  <a href={`/detail/${id}`} >
    <ImgWrapper>
      <Img src={DEFAULT_IMAGE} alt="" />
    </ImgWrapper>
  </a>

<Button> 
<MdFavoriteBorder size='32px'/>
  {0} likes!
</Button>
    </article>
  )
}


