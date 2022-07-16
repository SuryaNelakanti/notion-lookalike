import React from 'react'
import { GroupNoteType } from '../../helpers'

type BoardGroupProps = {
  group: GroupNoteType
  groupIndex: number
  children: any
  newNote: (groupIndex: number) => void
}

export const BoardGroup: React.FC<BoardGroupProps> = ({
  group,
  groupIndex,
  children,
  newNote,
}) => {
  const newNoteHandler = () => {
    newNote(groupIndex)
  }

  return (
    <div className="group header-txt-1 bold-txt" key={groupIndex}>
      {group.name}
      {children}
      <div className="group__add-note body-txt-4" onClick={newNoteHandler}>
        + new note
      </div>
    </div>
  )
}
