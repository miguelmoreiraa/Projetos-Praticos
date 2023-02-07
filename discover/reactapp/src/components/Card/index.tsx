import "./styles.css";

export type CardProps = {
  name: string;
  time: string;
};
export default function Card(props: CardProps) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}
