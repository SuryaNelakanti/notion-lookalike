import React, { useEffect, useState } from 'react'
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
  // States.
  const [groupName, setGroupName] = useState(group.name)

  //Handlers.
  const newNoteHandler = () => {
    newNote()
  }

  const deleteGroupHandler = () => {
    deleteGroup()
  }

  const editGroupHandler = async (editedName: string) => {
    setGroupName(editedName)
  }

  // Input value is in a useEffect to prevent last character not being captured.
  useEffect(() => {
    editGroup(groupName)
  }, [groupName])

  return (
    <div className="group" key={groupIndex}>
      <div className="group__heading">
        <input
          className="group__heading-edit no-input-styling header-txt-1 bold-txt"
          value={groupName}
          onChange={(editedName) => editGroupHandler(editedName.target.value)}
        />
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
