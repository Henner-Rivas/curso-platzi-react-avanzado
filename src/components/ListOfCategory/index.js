import React, { useState, useEffect } from "react";
import { Loader } from "../../styles/Loader";
import { Category } from "../Category";
import { Item, List } from "./styles";

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
const [loading, setLoading] = useState(false);




  useEffect(() => {
    setLoading(true)
    fetch("https://petgram-api-hennerdev.vercel.app/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoading(false)
      });
  }, []);

  return {categories,loading}
}

const ListOfCategory = () => {
  const {categories,loading}= useCategoriesData()
  const [showFixed, setShowFixed] = useState(false);


  useEffect(function () {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200
/*       showFixed !== newShowFixed && setShowFixed(newShowFixed)
 */    
    if (showFixed !==  newShowFixed) {
       setShowFixed(newShowFixed)
    }
}

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderLIst = (fixed) => {
  return ( <List  fixed={fixed}>
       {loading ?  <Loader > </Loader>
       :(
        categories.map((category) => (
        <Item key={category.id}>
          <Category category={category} />
        </Item>
      )))
  }
    </List>
    )
  };

  return (
    <> 
       
      {
      renderLIst()}
       {showFixed &&  renderLIst(true)}
     </>
  );
};

export default ListOfCategory;
