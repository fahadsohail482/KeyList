import React from "react";
import { Draggable } from "react-beautiful-dnd";
const ListItem = (props) => {
  console.log(props.listitem);
  return (
    <Draggable draggableId={props.listDesc} index={props.index}>
      {(provided, snapshot) => (
        <div
          className="list-item"
          key={props.listitem}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {props.listDesc}
        </div>
      )}
    </Draggable>
  );
};
export default ListItem;
