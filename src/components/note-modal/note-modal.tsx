import React from 'react'

type NoteModalProps = {
  show: boolean
  onClose: () => void
}
export const NoteModal: React.FC<NoteModalProps> = ({ show, onClose }) => {
  const className = show ? 'modal-outer' : 'modal-hide'

  return (
    <div className={className} onClick={onClose}>
      <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
        NoteModal
        <button>Click me bro</button>
      </div>
    </div>
  )
}
