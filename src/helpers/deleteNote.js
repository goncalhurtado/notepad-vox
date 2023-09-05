export function deleteNote(key) {

    const notesString = localStorage.getItem("notes");
    const notes = JSON.parse(notesString);

    const indexToDelete = notes.findIndex((note) => note.key === key);
    // console.log(indexToDelete);
    notes.splice(indexToDelete, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
}