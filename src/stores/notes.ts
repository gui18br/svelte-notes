import { writable } from "svelte/store";

type Note = {
  id: string;
  content: string;
};

export const notes = writable<Note[]>([]);
