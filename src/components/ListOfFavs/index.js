import React from 'react'
import {Image,Grid,Link} from './styles'
const ListOfFavs = ({favs=[]}) => {
console.log("🚀 ~ file: index.js ~ line 4 ~ ListOfFavs ~ favs", favs)
  return (
     <Grid> 
{   favs.map(fav =><Link key={fav.id} to={`/detail/${fav.id}`} ><Image  src={fav.src} ></Image> 
 </Link> )}
 </Grid>
  )
}

export default ListOfFavs
