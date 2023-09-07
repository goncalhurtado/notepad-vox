import { getNotes } from "./getNotes"

export const fetchNotes = (setNotes) => {
    setNotes(getNotes())
}