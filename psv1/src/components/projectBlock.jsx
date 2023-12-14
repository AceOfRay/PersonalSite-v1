import "../css/projectBlock.css"

export default function ProjectBlock({ title, paragraph }) {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <p className="para">{paragraph}</p>
    </div>
  );
}
