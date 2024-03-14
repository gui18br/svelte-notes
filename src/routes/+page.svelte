<script lang="ts">
    import { notes } from '../stores/notes';
    import { v4 as generateId } from 'uuid'

    let noteContent: string;

    function createNote() {
        notes.update((currentNotes) => [...currentNotes, {
            id: generateId(),
            content: noteContent
        }])
    }
    
</script>

<form on:submit|preventDefault={createNote}>
    <textarea bind:value={noteContent}/>
    <button type="submit">Criar</button>
</form>

