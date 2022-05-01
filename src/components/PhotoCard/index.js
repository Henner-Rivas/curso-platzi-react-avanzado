import React, { Fragment } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { useNearScreen } from '../hooks/useNearScreen'
 import FavButton from '../FavButton'
import { useLikePhoto } from '../hooks/useLIkePhoto'
import { Link } from 'react-router-dom'


const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
export const PhotoCard = ({ id,liked, likes = 0, src = DEFAULT_IMAGE }) => {


const [show,element]= useNearScreen()
const [toggleLike] = useLikePhoto()

  const handleFavClick=()=> {

    toggleLike({ variables: { input: { id: id } } })
  }
  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
           
           <FavButton liked={liked}  likes={likes} onClick={handleFavClick}/>
        </Fragment>
      }
    </Article>
  )
}
