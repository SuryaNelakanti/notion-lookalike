import React from 'react'
import { GroupNoteType } from '../table/table'

type BoardGroupProps = {
  group: GroupNoteType
  groupIndex: number
  children: any
}

export const BoardGroup: React.FC<BoardGroupProps> = ({
  group,
  groupIndex,
  children,
}) => {
  return (
    <div className="group header-txt-1 bold-txt" key={groupIndex}>
      {group.name}
      {children}
      <div className="group__add-note body-txt-4">+ New</div>
    </div>
  )
}
