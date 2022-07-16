import React, { useState, useRef } from 'react'
import { Note } from '../note/note'

export type GroupNoteType = {
  name: string
  value: Array<string>
}

type TableProps = {
  groupNotes: Array<GroupNoteType>
}
export const Table: React.FC<TableProps> = ({ groupNotes }) => {
  const [groupNotesState, setGroupNotesState] =
    useState<Array<GroupNoteType>>(groupNotes)
  const dragStartIndex = useRef({ groupIndex: 0, noteIndex: 0 })
  const dragEndIndex = useRef({ groupIndex: 0, noteIndex: 0 })

  const draggingStartHandler = (groupIndex: number, noteIndex: number) => {
    dragStartIndex.current.groupIndex = groupIndex
    dragStartIndex.current.noteIndex = noteIndex
  }

  const draggedOverHandler = (groupIndex: number, noteIndex: number) => {
    dragEndIndex.current.groupIndex = groupIndex
    dragEndIndex.current.noteIndex = noteIndex
  }

  const dragEnd = () => {
    const updatedGroupNotes = [...groupNotesState]
    // Index of the note selected and the group it is selected in.
    const initialGroupIndex = dragStartIndex.current.groupIndex
    const initialNoteIndex = dragStartIndex.current.noteIndex

    // Index of where the note got dragged to, and the group.
    const finalGroupIndex = dragEndIndex.current.groupIndex
    const finalNoteIndex = dragEndIndex.current.noteIndex

    // Note dragged value.
    const initialNote =
      updatedGroupNotes[initialGroupIndex].value[initialNoteIndex]

    // Removing inital location of the note.
    updatedGroupNotes[initialGroupIndex].value.splice(initialNoteIndex, 1)

    // Setting final location of the note.
    updatedGroupNotes[finalGroupIndex].value.splice(
      finalNoteIndex,
      0,
      initialNote
    )
    setGroupNotesState(updatedGroupNotes)
  }

  return (
    <div className="table">
      {groupNotesState.map((group, groupIndex) => (
        <div className="group-header header-txt-1 bold-txt" key={groupIndex}>
          {group.name}
          {group.value.map((note, noteIndex) => (
            <Note
              draggingStartHandler={() =>
                draggingStartHandler(groupIndex, noteIndex)
              }
              draggedOverHandler={() =>
                draggedOverHandler(groupIndex, noteIndex)
              }
              dragEnd={() => dragEnd()}
              groupIndex={groupIndex}
              noteIndex={noteIndex}
              note={note}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
