export default function Card(props) {
  return <div className="card-wrapper">{props.name || "MyCard"}</div>;
}
