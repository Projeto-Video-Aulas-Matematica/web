import { Link } from 'react-router-dom';

export default function LessonList({ lessons, activeLessonId }) {
  return (
    <div className="lesson-list">
      {lessons.map((lesson, index) => (
        <Link
          key={lesson.id}
          to={`/aula/${lesson.id}`}
          className={activeLessonId === lesson.id ? 'lesson-item active' : 'lesson-item'}
        >
          <span className="lesson-bullet">{index + 1}</span>
          <span>{lesson.title}</span>
        </Link>
      ))}
    </div>
  );
}
