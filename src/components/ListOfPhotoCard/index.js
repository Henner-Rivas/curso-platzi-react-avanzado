import React from "react";
import { PhotoCard } from "../PhotoCard";
import { useQuery } from "@apollo/react-hooks";
import { getPhotos } from "../hoc/withPhotos";


const ListOfPhotoCard = ({categoryId}) => {
  const { loading, error, data } = useQuery(getPhotos,{
    variables: { categoryId: categoryId}});

  if (loading) return null;

  return (
    <div>
      {data.photos && data.photos.map((photoCard, id) => (
        <PhotoCard key={id} {...photoCard} />
      ))}
    </div>
  );
};

export default ListOfPhotoCard;
