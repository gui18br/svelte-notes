import { writable } from "svelte/store";

export type Note = {
  id: string;
  content: string;
};

export const notes = writable<Note[]>([]);
