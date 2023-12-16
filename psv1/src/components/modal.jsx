import "../css/modal.css";
import Backdrop from "./backdrop";

export default function Modal({ title, paragraph, isOpen, closeModal }) {
  if (!isOpen) {
    return null;
  }
  return (
    <Backdrop onClick={closeModal}>
      <div className="modalContent">
        <span className="close" id="closeModal" onClick={closeModal}>
          &times;
        </span>
        <h1 className="title">{title}</h1>
        <p className="paragraph">{paragraph}</p>
      </div>
    </Backdrop>
  );
}
