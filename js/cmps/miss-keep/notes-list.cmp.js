import notePreview from './note-preview.cmp.js';
import noteService from '../../services/miss-keep/notes-service.js';
import eventBus, { NOTES_CHANGE } from '../../services/event-bus.service.js';

export default {
    props: [],
    template: `
        <section class="notes-list-container">
            <note-preview v-for="(note, idx) in notes" @click.native="$emit('editNote', note)" :key="note.id" :note="note"></note-preview>
        </section>
    `,
    data() {
        return {
            notes: null,
        }
    },
    methods: {
        updateNotes(){
            console.log('updateNotes')
            noteService.query().then(notes => {
                this.notes = notes;
            }); 
        },
    },
    created() {
        this.updateNotes();
        eventBus.$on(NOTES_CHANGE , ()=>{
            this.updateNotes();
        })

    },
    components: {
        notePreview,
    }

}