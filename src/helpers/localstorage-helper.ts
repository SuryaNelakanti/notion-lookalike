export type GroupNoteType = {
  name: string
  value: Array<string>
}

// Initial data.
export const initialGrouping = [
  { name: 'Todo', value: [] },
  { name: 'In Progress', value: [] },
  { name: 'Done', value: [] },
]

// Local storage helper function.
export const GroupedNotesMetaManager = {
  saveNotes: (grouping: GroupNoteType[]): void => {
    localStorage.setItem('grouped_notes', JSON.stringify(grouping))
  },

  getNotes: (): string | null => localStorage.getItem('grouped_notes'),
}
