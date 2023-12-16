import "../css/backdrop.css"

export default function Backdrop({ children, onClick }) {
  return (
    <div className="backdrop" onClick={onClick}>
      {children}
    </div>
  );
}
