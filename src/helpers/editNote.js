import { format } from "date-fns";

export const editNote = (dataForm, key) => {

    const notesString = localStorage.getItem("notes");
    const notes = JSON.parse(notesString);

    const indexToEdit = notes.findIndex((note) => note.key === key);

    notes[indexToEdit].cardText = dataForm.cardText;
    notes[indexToEdit].cardTitle = dataForm.cardTitle;

    const date = new Date();
    const noteDate = format(date, "dd/MM HH:mm");
    notes[indexToEdit].time = noteDate;

    localStorage.setItem("notes", JSON.stringify(notes));

}