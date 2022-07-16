import React from 'react'
import { GroupNoteType } from '../../helpers'

type BoardGroupProps = {
  group: GroupNoteType
  groupIndex: number
  children: any
  newNote: (groupIndex: number) => void
  deleteGroup: (groupIndex: number) => void
}

export const BoardGroup: React.FC<BoardGroupProps> = ({
  group,
  groupIndex,
  children,
  newNote,
  deleteGroup,
}) => {
  const newNoteHandler = () => {
    newNote(groupIndex)
  }

  const deleteGroupHandler = () => {
    deleteGroup(groupIndex)
  }

  return (
    <div className="group header-txt-1 bold-txt" key={groupIndex}>
      <div className="group__heading">
        <>{group.name}</>
        <div className="group__heading-options" onClick={deleteGroupHandler}>
          -
        </div>
      </div>
      {children}
      <div className="group__add-note body-txt-4" onClick={newNoteHandler}>
        + new note
      </div>
    </div>
  )
}
