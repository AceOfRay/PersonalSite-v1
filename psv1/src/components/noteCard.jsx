import "../css/noteCard.css";


export default function NoteCard({ title, paragraph, onClick }) {
    
    return (
        <div className="card" onClick={onClick}>
            <h1 className="noteTitle">{title}</h1>
            <p>{paragraph}</p>
        </div>
    )
}
