import React, { useCallback } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import SingleKeyListContainer from './SingleKeyListContainer'
const MianCotainer = () => {
  const onDragEnd = useCallback(() => {
    console.log("Dragged");
  }, []);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>Hello From Container</div>
      <SingleKeyListContainer/>
    </DragDropContext>
  );
};

export default MianCotainer;
