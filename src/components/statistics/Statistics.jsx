export default function Stat({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total:{total}</li>
      <li>Positive Feedback: {positivePercentage}%</li>
    </ul>
  );
}
