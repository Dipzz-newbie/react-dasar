// import { useImmer } from "use-immer";
import { useReducer } from "react";
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
const notesReducer = (notes, action) => {
        switch (action.type) {
            case "ADD_Note": 
            return [
                ...notes,
                {
                    id: id++,
                    text:action.text,
                    done: false
                }
            ];
            
            case "CHANGE_Note" :
                return notes.map(note => note.id === action.id ? {...note, text: action.text, done: action.done} : note );

            case "DELETE_Note" :
                return notes.filter(note => note.id !== action.id);

            default:
                notes;
        }   
    }

const NoteApp = () => {

    // menggunakan cara normal
    /* 
    const [notes, setNotes] = useImmer(initialCore);

    const handleAddNote = (text) => {
        setNotes(draft => {
            draft.push({
                id:id++,
                text: text,
                done:false
            });
        })
    }

    const handleChangeNote = (note) => {
        setNotes(draft => {
            const index = draft.findIndex(item => item.id === note.id);
            draft[index] = note;
        })
    }

    const handleDeleteNote = (note) => {
        setNotes(draft => {
            const index = draft.findIndex(item => item.id === note.id);
            draft.splice(index, 1);
        })
    }
    */

    const [notes, dispatch] = useReducer(notesReducer, initialCore);

    const handleAddNote = (text) => {
        dispatch({
            type: "ADD_Note",
            text: text
        })
    }

    const handleChangeNote = (note) => {
        dispatch({
            type: "CHANGE_Note",
            id:note.id,
            text:note.text,
            done:note.done
        })
    }

    const handleDeleteNote = (note) => {
        dispatch({
            type: "DELETE_Note", 
            id: note.id
        })
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