import React, { useState, useRef } from 'react'
import { GroupNoteType } from '../../helpers'
import { BoardGroup } from '../board-group/board-group'
import { Note } from '../note/note'

type TableProps = {
  groupNotes: Array<GroupNoteType>
}
export const Table: React.FC<TableProps> = ({ groupNotes }) => {
  // States.
  const [groupNotesState, setGroupNotesState] =
    useState<Array<GroupNoteType>>(groupNotes)

  // Refs.
  const dragStartIndex = useRef({ groupIndex: 0, noteIndex: 0 })
  const dragEndIndex = useRef({ groupIndex: 0, noteIndex: 0 })

  // Handlers.
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
        <BoardGroup group={group} groupIndex={groupIndex}>
          {group.value.map((note, noteIndex) => (
            <Note
              draggingStartHandler={() =>
                draggingStartHandler(groupIndex, noteIndex)
              }
              draggedOverHandler={() =>
                draggedOverHandler(groupIndex, noteIndex)
              }
              dragEnd={dragEnd}
              groupIndex={groupIndex}
              noteIndex={noteIndex}
              note={note}
            />
          ))}
        </BoardGroup>
      ))}
    </div>
  )
}
