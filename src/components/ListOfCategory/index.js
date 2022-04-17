import React from "react";
import { Category } from "../Category";
import { Item, List } from "./styles";
import {categories} from  '../../../api/db.json'


const ListOfCategory = () => {
  return (
    <List>
      {
      categories.map((category) => (
        <Item key={category.id}>
          <Category category={category} />
        </Item>
      ))}
    </List>
  );
};

export default ListOfCategory;
