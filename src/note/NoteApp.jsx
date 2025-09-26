import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { ValueContext, NotesDispatchContext } from "./NotesContext";

let id = 0;
const initialCore = [
    { id: id++, text: "Belajar Html", done: true },
    { id: id++, text: "Belajar Javascript", done: true },
    { id: id++, text: "Belajar Python", done: false },
    { id: id++, text: "Belajar Css", done: true },
    { id: id++, text: "Belajar React", done: false },
    { id: id++, text: "Belajar Rust", done: true },
    { id: id++, text: "Belajar MySql", done: false },
];

const notesReducer = (notes, action) => {
    switch (action.type) {
        case "ADD_Note":
            notes.push({
                id: id++,
                text: action.text,
                done: false
            });
            break;
        case "CHANGE_Note":
            const index = notes.findIndex(item => item.id === action.note.id);
            notes[index] = action.note;
            break;
        case "DELETE_Note":
            return notes.filter(note => note.id !== action.id);
        default:
            break;
    }
};

const NoteApp = () => {
    const [notes, dispatch] = useImmerReducer(notesReducer, initialCore);

    return (
        <ValueContext.Provider value={notes}>
            <NotesDispatchContext.Provider value={dispatch}>
                <div>
                    <h1>Note App</h1>
                    <NoteForm />
                    <NoteList />
                </div>
            </NotesDispatchContext.Provider>
        </ValueContext.Provider>
    );
};

export default NoteApp;
