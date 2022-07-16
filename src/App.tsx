import React from 'react'
import './assets/scss/main.scss'
import { Table } from './components/table/table.js'
import { GroupedNotesMetaManager, initialGrouping } from './helpers'

export const App = () => {
  // Fetching notes from localStorage.
  const groupNotesString = GroupedNotesMetaManager.getNotes()

  // If notes do not exist in local storage, use inital values instead.
  const groupNotes = !!groupNotesString
    ? JSON.parse(groupNotesString)
    : initialGrouping

  return (
    <div className="App">
      <Table groupNotes={groupNotes}></Table>
    </div>
  )
}
