import React from 'react'

type NoteModalProps = {
  show: boolean
  noteTitle: string
  noteSummary: string
  onClose: () => void
}
export const NoteModal: React.FC<NoteModalProps> = ({
  show,
  noteTitle,
  noteSummary,
  onClose,
}) => {
  const className = show ? 'modal-outer' : 'modal-hide'

  return (
    <div className={className} onClick={onClose}>
      <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
        <div className="note-expanded-view">
          <div className="note-title header-txt-1 bold-txt">{noteTitle}</div>
          <hr className="seperator-line" />
          <div className="note-summary body-txt-1">{noteSummary}</div>
        </div>
      </div>
    </div>
  )
}
