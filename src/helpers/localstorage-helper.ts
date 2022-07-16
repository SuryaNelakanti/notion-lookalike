export type NoteType = {
  title: string
  summary?: string
}
export type GroupNoteType = {
  name: string
  value: Array<NoteType>
}

// Initial data.
export const initialGrouping = [
  { name: 'Todo', value: [{ title: 'Untitled', summary: '' }] },
  {
    name: 'In Progress',
    value: [{ title: 'Untitled', summary: '' }],
  },
  { name: 'Done', value: [{ title: 'Untitled', summary: '' }] },
]

export const initialSummary = [{ noteIndex: '1', value: [] }]

// Local storage helper function.
export const GroupedNotesMetaManager = {
  saveNotes: (grouping: GroupNoteType[]): void => {
    localStorage.setItem('grouped_notes', JSON.stringify(grouping))
  },

  getNotes: (): string | null => localStorage.getItem('grouped_notes'),
}
