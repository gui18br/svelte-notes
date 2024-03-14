import { error, type LoadEvent } from "@sveltejs/kit";
import { notes } from "../../stores/notes";

export function load({ params }: LoadEvent) {
  let storedNote;
  notes.subscribe((currentNotes) => {
    const foundNote = currentNotes.find((note) => note.id === params.note);
    if (foundNote) {
      storedNote = foundNote;
    }
  });
  if (!storedNote) throw error(404, "Note not found");
  return {
    note: storedNote,
  };
}
