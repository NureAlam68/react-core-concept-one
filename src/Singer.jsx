import "./Book.css";

export default function Singer({ singer }) {
  return (
    <div className="singer">
      <h3>Singer: {singer.name}</h3>
      <p>Age: {singer.age}</p>
    </div>
  );
}
