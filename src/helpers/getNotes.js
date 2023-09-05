export function getNotes() {

    const notesString = localStorage.getItem("notes");
    const notes = JSON.parse(notesString);
    return notes;

}