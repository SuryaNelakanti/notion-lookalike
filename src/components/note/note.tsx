import React, { useState } from 'react'
import { NoteType } from '../../helpers'
import { NoteModal } from '../note-modal/note-modal'

type NoteProps = {
  draggingStartHandler: (groupIndex: number, noteIndex: number) => void
  draggedOverHandler: (groupIndex: number, noteIndex: number) => void
  dragEnd: () => void
  groupIndex: number
  noteIndex: number
  note: NoteType
  editNoteHandler: (noteTitle: string) => void
  editSummaryhandler: (editedSummary: string) => void
}
export const Note: React.FC<NoteProps> = ({
  draggingStartHandler,
  draggedOverHandler,
  dragEnd,
  groupIndex,
  noteIndex,
  note,
  editNoteHandler,
  editSummaryhandler,
}) => {
  // States.
  const [showModal, setShowModal] = useState(false)

  // Handlers.
  const showModalHandler = () => setShowModal(true)
  const hideModalHandler = () => setShowModal(false)

  return (
    <>
      <div
        className="note body-txt-3"
        draggable
        onDragStart={() => draggingStartHandler(groupIndex, noteIndex)}
        onDragEnter={() => draggedOverHandler(groupIndex, noteIndex)}
        onDragEnd={dragEnd}
        key={noteIndex}
        onClick={showModalHandler}
      >
        <input
          className="group__heading-edit no-input-styling body-txt-3"
          value={note.title}
          autoFocus
          onChange={(editedNote) => editNoteHandler(editedNote.target.value)}
        />
      </div>
      {showModal && (
        <NoteModal
          show
          noteTitle={note.title}
          noteSummary={note.summary}
          onClose={hideModalHandler}
          onTitleChange={(editedTitle) => editNoteHandler(editedTitle)}
          onSummaryChange={(editedSummary) => editSummaryhandler(editedSummary)}
        />
      )}
    </>
  )
}
