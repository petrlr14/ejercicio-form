import React from "react";
import { Item } from "./Item/Item";
import { container } from "./List.module.css";

export const List = ({ list, deleteHandler }) => {
  return (
    <div className={container}>
      {list.map((person, index) => {
        return (
          <Item
            key={index}
            person={person}
            deleteHandler={() => {
              deleteHandler(index);
            }}
          />
        );
      })}
    </div>
  );
};
