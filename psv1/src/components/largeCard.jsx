import "../css/largeCard.css";

export default function LargeCard({ title, paragraph, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={`modalOverlay ${isOpen ? 'open' : ''}`}>
      <div className={`modalContent ${isOpen ? 'open' : ''}`} >
        <span className="close" id="closeModal" onClick={onClose}>
          &times;
        </span>
        <h1 className="title">{title}</h1>
        <p className="paragraph">{paragraph}</p>
      </div>
    </div>
  );
}
