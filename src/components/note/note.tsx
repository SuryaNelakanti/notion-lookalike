import React from 'react'

type NoteProps = {
  draggingStartHandler: (groupIndex: number, noteIndex: number) => void
  draggedOverHandler: (groupIndex: number, noteIndex: number) => void
  dragEnd: () => void
  groupIndex: number
  noteIndex: number
  note: string
}
export const Note: React.FC<NoteProps> = ({
  draggingStartHandler,
  draggedOverHandler,
  dragEnd,
  groupIndex,
  noteIndex,
  note,
}) => {
  return (
    <div
      className="note body-txt-3"
      draggable
      onDragStart={() => draggingStartHandler(groupIndex, noteIndex)}
      onDragEnter={() => draggedOverHandler(groupIndex, noteIndex)}
      onDragEnd={dragEnd}
      key={noteIndex}
    >
      {note}
    </div>
  )
}
