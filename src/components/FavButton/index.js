import React from 'react'
import { MdFavoriteBorder ,MdFavorite} from 'react-icons/md'
import { Button } from '../PhotoCard/styles';

const FavButton = ({liked,likes,onClick}) => {
  const LikeIcon= liked ? <MdFavorite size='32px'/> : <MdFavoriteBorder size='32px' />;
  return (
    <Button onClick={onClick}>
    {LikeIcon}  {likes}
  </Button>
  )
}

export default FavButton
