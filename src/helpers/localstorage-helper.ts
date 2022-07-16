export type GroupNoteType = {
  name: string
  value: Array<string>
}

export const initialGrouping = [
  { name: 'Todo', value: [] },
  { name: 'In Progress', value: [] },
  { name: 'Done', value: [] },
]

export const GroupedNotesMetaManager = {
  saveNotes: (grouping: GroupNoteType[]): void => {
    localStorage.setItem('grouped_notes', JSON.stringify(grouping))
  },

  getNotes: (): string | null => localStorage.getItem('grouped_notes'),
}
