import notesList from '../cmps/miss-keep/notes-list.cmp.js';
import noteService from '../services/miss-keep/notes-service.js';
import newNote from '../cmps/miss-keep/new-note.cmp.js';

export default {
    template: `
    <section class="page-content">
        <h1>Mr. Meeseeks</h1>
        <button class="new-note-btn" @click="newNote">+</button>
        <new-note v-if="isNewNote" @addedNote="updateNotes" @closeModal="newNote"></new-note>
        <notes-list v-if="notes" :notes="notes"></notes-list>
    </section>
    `,
    data() {
        return {
            notes: null,
            isNewNote: false,
        }
    },
    created() {
        this.updateNotes();
    },
    methods: {
        newNote() {
            console.log('isNewNote', this.isNewNote)
            this.isNewNote = !this.isNewNote; 
        },
        updateNotes(){
            noteService.query().then(notes => {
                this.notes = notes;
            }); 
        }

    },
    components: {
        notesList,
        newNote,
    }
}