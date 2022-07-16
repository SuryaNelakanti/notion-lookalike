import React from 'react'

type NoteModalProps = {
  show: boolean
  noteTitle: string
  noteSummary?: string
  onClose: () => void
  onTitleChange: (editedTitle: string) => void
  onSummaryChange: (editedSummary: string) => void
}
export const NoteModal: React.FC<NoteModalProps> = ({
  show,
  noteTitle,
  noteSummary,
  onClose,
  onTitleChange,
  onSummaryChange,
}) => {
  const className = show ? 'modal-outer' : 'modal-hide'

  return (
    <div className={className} onClick={onClose}>
      <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
        <div className="note-expanded-view">
          <input
            className="note-header no-input-styling header-txt-1 bold-txt"
            value={noteTitle}
            onChange={(editedNote) => onTitleChange(editedNote.target.value)}
          />
          <hr className="seperator-line" />
          <textarea
            className="note-summary body-txt-1 no-input-styling"
            value={noteSummary}
            placeholder={'Type something here'}
            onChange={(editedSummary) =>
              onSummaryChange(editedSummary.target.value)
            }
            autoFocus
          />
        </div>
      </div>
    </div>
  )
}
