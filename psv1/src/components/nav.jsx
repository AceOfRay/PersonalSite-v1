import "../css/nav.css";

export default function Navbar( {setPage} ) {
    
    return (
        <nav className="nav">
            <ul className="list">
                <li className="listObject" onClick={() => {setPage('Home')}}>Home</li>
                <li className="listObject" onClick={() => {setPage('Projects')}}>Projects</li>
                <li className="listObject" onClick={() => {setPage('Contacts')}}>Contact</li>
            </ul>
        </nav>
    )
}