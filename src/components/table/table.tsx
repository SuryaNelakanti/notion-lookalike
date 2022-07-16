import React, { useState, useRef, useEffect } from 'react'
import { GroupedNotesMetaManager, GroupNoteType } from '../../helpers'
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

  // Effects.
  useEffect(() => {
    GroupedNotesMetaManager.saveNotes(groupNotesState)
  }, [groupNotesState])

  // Handlers.
  const draggingStartHandler = (groupIndex: number, noteIndex: number) => {
    dragStartIndex.current.groupIndex = groupIndex
    dragStartIndex.current.noteIndex = noteIndex
  }

  const draggedOverHandler = (groupIndex: number, noteIndex?: number) => {
    dragEndIndex.current.groupIndex = groupIndex
    if (noteIndex) {
      dragEndIndex.current.noteIndex = noteIndex
    }
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

  // Note adding handler.
  const newNote = (groupIndex: number) => {
    const updatedGroupNotes = [...groupNotesState]
    updatedGroupNotes[groupIndex].value.push({ title: 'Type something...' })
    setGroupNotesState(updatedGroupNotes)
  }

  // Note title editing handler.
  const editNoteTitle = (
    groupIndex: number,
    noteIndex: number,
    noteTitle: string
  ) => {
    const updatedGroupNotes = [...groupNotesState]
    updatedGroupNotes[groupIndex].value[noteIndex].title = noteTitle
    setGroupNotesState(updatedGroupNotes)
  }

  // Note summary editing handler.
  const editSummmaryHandler = (
    groupIndex: number,
    noteIndex: number,
    editedSummary: string
  ) => {
    const updatedGroupNotes = [...groupNotesState]
    updatedGroupNotes[groupIndex].value[noteIndex].summary = editedSummary
    setGroupNotesState(updatedGroupNotes)
  }

  // Group adding handler.
  const newGroup = () => {
    const updatedGroupNotes = [...groupNotesState]
    updatedGroupNotes.push({ name: 'New Group', value: [] })
    setGroupNotesState(updatedGroupNotes)
  }

  // Group editing handler.
  const editGroup = (groupIndex: number, groupName: string) => {
    const updatedGroupNotes = [...groupNotesState]
    updatedGroupNotes[groupIndex].name = groupName
    setGroupNotesState(updatedGroupNotes)
  }

  // Group deleting handler.
  const deleteGroup = (groupIndex: number) => {
    const updatedGroupNotes = [...groupNotesState]
    updatedGroupNotes.splice(groupIndex, 1)
    setGroupNotesState(updatedGroupNotes)
  }

  return (
    <div>
      <div className="header header-txt-1 bold-txt">Task Board ☎️</div>
      <div className="table">
        {groupNotesState.map((group, groupIndex) => (
          <BoardGroup
            group={group}
            groupIndex={groupIndex}
            newNote={() => newNote(groupIndex)}
            deleteGroup={() => deleteGroup(groupIndex)}
            editGroup={(groupName) => editGroup(groupIndex, groupName)}
            key={groupIndex}
            onGroupDragOver={(groupIndex) => draggedOverHandler(groupIndex)}
          >
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
                editNoteHandler={(noteTitle) =>
                  editNoteTitle(groupIndex, noteIndex, noteTitle)
                }
                key={noteIndex}
                editSummaryhandler={(editedSummary) =>
                  editSummmaryHandler(groupIndex, noteIndex, editedSummary)
                }
              />
            ))}
          </BoardGroup>
        ))}
        <div
          className="table__add-new-group header-txt-1 bold-txt"
          onClick={newGroup}
        >
          + Add Group
        </div>
      </div>
    </div>
  )
}
