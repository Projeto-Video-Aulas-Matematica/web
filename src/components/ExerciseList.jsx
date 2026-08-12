export default function ExerciseList({ exercises }) {
  return (
    <div className="exercise-list">
      {exercises.map((exercise) => (
        <a
          className="exercise-item"
          key={exercise}
          href={`${exercise.pdfUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="exercise-icon">☰</span>
          <span>{exercise.name}</span>
        </a>
      ))}
    </div>
  );
}