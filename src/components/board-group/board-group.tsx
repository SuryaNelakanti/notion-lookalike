import React from 'react'
import { GroupNoteType } from '../../helpers'

type BoardGroupProps = {
  group: GroupNoteType
  groupIndex: number
  children: any
  newNote: () => void
  editGroup: (newGroupName: string) => void
  deleteGroup: () => void
}

export const BoardGroup: React.FC<BoardGroupProps> = ({
  group,
  groupIndex,
  children,
  newNote,
  editGroup,
  deleteGroup,
}) => {
  return (
    <div className="group" key={groupIndex}>
      <div className="group__heading">
        <input
          className="group__heading-edit no-input-styling header-txt-1 bold-txt"
          value={group.name}
          onChange={(editedName) => editGroup(editedName.target.value)}
        />
        <div className="group__heading-options" onClick={deleteGroup}>
          -
        </div>
      </div>
      {children}
      <div className="group__add-note body-txt-4" onClick={newNote}>
        + new note
      </div>
    </div>
  )
}
