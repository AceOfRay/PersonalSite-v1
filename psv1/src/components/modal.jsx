import "../css/modal.css";
import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "./backdrop";

const floatUp = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  show: {
    y: "0",
    opacity: 1,
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export default function Modal({ title, paragraph, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }
  return (
    <Backdrop onClick={onClose}>
      <motion.div
        className="modalContent"
        onClick={(e) => e.stopPropagation()}
        variants={floatUp}
        initial="hidden"
        animate="show"
        exit="exit"
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <span className="close" id="closeModal" onClick={onClose}>
          &times;
        </span>
        <motion.h1 className="title">{title}</motion.h1>
        <motion.p className="paragraph">{paragraph}</motion.p>
      </motion.div>
    </Backdrop>
  );
}
