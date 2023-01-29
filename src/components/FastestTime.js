export default function RollCount(props) {
  return (
    <p className="fastest-time">
      Fastest Time: <span>{props.fastestTime / 100}</span>s
    </p>
  );
}
