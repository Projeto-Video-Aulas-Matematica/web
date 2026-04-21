export default function ExerciseList({ exercises }) {
  return (
    <div className="exercise-list">
      {exercises.map((exercise) => (
        <div className="exercise-item" key={exercise}>
          <span className="exercise-icon">☰</span>
          <span>{exercise}</span>
        </div>
      ))}
    </div>
  );
}
