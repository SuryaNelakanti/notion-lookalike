import React, { useRef } from 'react'

type TableProps = {
  groups?: Array<string>
  items?: Array<string>
}
export const Table: React.FC<TableProps> = ({ groups: columns, items }) => {
  console.log(columns)
  console.log(items)
  const dragStartIndex = useRef({ groupIndex: 0, noteIndex: 0 })
  const dragEndIndex = useRef({ groupIndex: 0, noteIndex: 0 })

  const groupNotes = [
    { name: 'Group 1', value: ['Test 1', 'Test 2'] },
    { name: 'Group 2', value: ['Test 3', 'Test 4'] },
    { name: 'Group 3', value: ['Test 1', 'Test 2'] },
  ]

  const dragStart = (
    dragEvent: React.DragEvent<HTMLDivElement>,
    groupIndex: number,
    noteIndex: number
  ) => {
    console.log('DragStart')
    console.log(dragEvent.target)
    console.log(groupIndex)
    console.log(noteIndex)

    dragStartIndex.current.groupIndex = groupIndex
    dragStartIndex.current.noteIndex = noteIndex
  }

  const dragEnd = (
    dragEndEvent: React.DragEvent<HTMLDivElement>,
    groupIndex: number,
    noteIndex: number
  ) => {
    console.log('DragEnd')
    console.log(dragEndEvent.target)
    console.log(groupIndex)
    console.log(noteIndex)

    dragEndIndex.current.groupIndex = groupIndex
    dragEndIndex.current.noteIndex = noteIndex
  }

  return (
    <div className="table">
      {groupNotes.map((group, groupIndex) => (
        <div className="group-header header-txt-1 bold-txt" key={groupIndex}>
          {group.name}
          {group.value.map((note, noteIndex) => (
            <div
              className="draggable-items body-txt-2"
              draggable
              onDragStart={(e) => dragStart(e, groupIndex, noteIndex)}
              onDragEnter={(e) => dragEnd(e, groupIndex, noteIndex)}
              key={noteIndex}
            >
              {note}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
