<script lang="ts">
    import type { PageData } from "./$types";
    import {notes} from "../../stores/notes";
    import {goto} from "$app/navigation";
    export let data: PageData;


    function deleteNote(event: Event) {
        const button = event.target as HTMLButtonElement;
        notes.update((currentNotes) => currentNotes.filter((note) => note.id !== button.id))
        goto('/', {replaceState: true});
    }
</script>

<a href="/">Voltar</a>
<button on:click={deleteNote} id={data.note.id}>Apagar</button>
<h1>{data.note.content}</h1>