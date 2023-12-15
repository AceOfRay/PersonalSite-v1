import "../css/projectBlock.css"

export default function ProjectBlock({ title, paragraph }) {
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <p className="para">{paragraph}</p>
    </div>
  );
}
