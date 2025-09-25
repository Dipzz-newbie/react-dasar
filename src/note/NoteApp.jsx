import { useImmer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

let id = 0;
const initialCore = [
    {id: id++, text:"Belajar Html", done:true},
    {id: id++, text:"Belajar Javascript", done:true},
    {id: id++, text:"Belajar Python", done:false},
    {id: id++, text:"Belajar Css", done:true},
    {id: id++, text:"Belajar React", done:false},
    {id: id++, text:"Belajar Rust", done:true},
    {id: id++, text:"Belajar MySql", done:false},
]


const NoteApp = () => {

    const [notes, setNotes] = useImmer(initialCore)

    const handleAddNote = (text) => {
        setNotes(draft => {
            draft.push({
                id:id++,
                text: text,
                done:false
            })
        })
    }

    const handleChangeNote = (note) => {
        setNotes(draft => {
            const index = draft.findIndex(item => item.id === note.id)
            draft[index] = note;
        })
    }

    const handleDeleteNote = (note) => {
        setNotes(draft => {
            const index = draft.findIndex(item => item.id === note.id)
            draft.splice(index, 1)
        })
    }

    const funcReducer = (notes, action) => {
        switch (action.type) {
            case "ADD_Note": 
            return [
                ...notes,
                {
                    id: id++,
                    text:action.text,
                    done: false
                }
            ]
            
            case "CHANGE_Note" :
                return notes.map(note => note.id === action.id ? {...note, text: action.text, done: action.done} : note )
        }
    }

    return(
        <div>
            <h1>Note App</h1>
            <NoteForm addValue={handleAddNote}/>
            <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote}/>
        </div>
    )
}

export default NoteApp;