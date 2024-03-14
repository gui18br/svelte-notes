<script lang="ts">
    import { notes, type Note } from '../stores/notes';
    import { v4 as generateId } from 'uuid'

    let noteContent: string;
    let storedNotes: Note[] = [];

    function createNote() {
        notes.update((currentNotes) => [...currentNotes, {
            id: generateId(),
            content: noteContent
        }])
    }

    notes.subscribe((currentNote) => {
        storedNotes = currentNote;
    })
    
</script>

<form on:submit|preventDefault={createNote}>
    <textarea bind:value={noteContent}/>
    <button type="submit">Criar</button>
</form>

{#each storedNotes as note (note.id)}
    <div class="note" id={note.id}>
        {note.content}
    </div>
{/each}