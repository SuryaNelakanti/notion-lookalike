import React from 'react'
import './assets/scss/main.scss'
import { Table } from './components/table/table'

const groupNotes = [
  { name: 'Group 1', value: ['Test 1', 'Test 2'] },
  { name: 'Group 2', value: ['Test 3', 'Test 4'] },
  { name: 'Group 3', value: ['Test 5', 'Test 6'] },
]
export const App = () => {
  return (
    <div className="App">
      <Table groupNotes={groupNotes}></Table>
    </div>
  )
}

export default App
