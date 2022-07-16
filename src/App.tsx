import React from 'react'
import './assets/scss/main.scss'
import { Table } from './components/table/table'
import { GroupedNotesMetaManager, initialGrouping } from './helpers'

export const App = () => {
  const groupNotesString = GroupedNotesMetaManager.getNotes()

  const groupNotes = !!groupNotesString
    ? JSON.parse(groupNotesString)
    : initialGrouping

  return (
    <div className="App">
      <Table groupNotes={groupNotes}></Table>
    </div>
  )
}
