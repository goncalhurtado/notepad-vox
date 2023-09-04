let savesNotes = localStorage.setItem("notes", "[]")

export function addNote(note) {

    let currentNotes = JSON.parse(localStorage.getItem("notes")) || [];

    let randomKey = Math.floor(Math.random() * 900) + 100;

    note.key = randomKey;

    currentNotes.push(note);

    localStorage.setItem("notes", JSON.stringify(currentNotes));
    console.log(currentNotes);
}