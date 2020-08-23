import React from "react";
import listData from "./data";
import ListItem from "./ListItem";
import { Droppable } from "react-beautiful-dnd";
const SingleKeyListContainer = () => {
  return (
    <div className="parent-container">
      <Droppable droppableId="1">
        {(provided, snapshot) =>
          listData.map((listitem, index) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <ListItem
                index={index}
                listitem={listitem.listId}
                listDesc={listitem.listDesc}
              />
              {provided.placeholder}
            </div>
          ))
        }
      </Droppable>
    </div>
  );
};
export default SingleKeyListContainer;
