import { format } from "date-fns";

JSON.parse(localStorage.getItem("notes")) || [];

export function addNote(note) {

    let currentNotes = JSON.parse(localStorage.getItem("notes")) || [];

    let randomKey = Math.floor(Math.random() * 900) + 100;

    const date = new Date();

    const noteDate = format(date, "dd/MM HH:mm");

    note.key = randomKey;
    note.time = noteDate;

    currentNotes.push(note);

    localStorage.setItem("notes", JSON.stringify(currentNotes));

    updateData();
}

export function updateData() {

    const notesString = localStorage.getItem("notes");
    const notes = JSON.parse(notesString);
    return notes;

}