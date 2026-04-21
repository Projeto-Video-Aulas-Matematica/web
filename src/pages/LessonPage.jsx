import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import LessonList from '../components/LessonList';
import Button from '../components/ui/Button';
import { modules } from '../data/courseData';

function findLessonById(lessonId) {
  for (const module of modules) {
    const lesson = module.lessons.find((currentLesson) => currentLesson.id === lessonId);
    if (lesson) {
      return { module, lesson };
    }
  }

  return { module: modules[0], lesson: modules[0].lessons[0] };
}

export default function LessonPage() {
  const { lessonId } = useParams();

  const { module, lesson } = useMemo(() => findLessonById(lessonId), [lessonId]);

  return (
    <section className="section">
      <div className="container lesson-page-grid">
        <aside className="lesson-nav-card">
          <h3>{lesson.title}</h3>
          <LessonList lessons={module.lessons} activeLessonId={lesson.id} />
        </aside>

        <div className="lesson-main-card">
          <h1>{lesson.title}</h1>

          <div className="embedded-video-wrapper">
            <iframe
              src={lesson.videoUrl}
              title={lesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="lesson-text-block">
            <h2>Texto da Aula</h2>
            <p>{lesson.content}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis mauris a mauris lacinia laoreet quis in nunc.
            </p>
          </div>
        </div>

        <aside className="lesson-side-card">
          <div className="video-placeholder small">
            <span className="play-button">▶</span>
          </div>
          <h3>{lesson.title}</h3>
          <p>{lesson.summary}</p>
          <Button to={`/modulo/${module.id}`}>Ver Aulas</Button>
        </aside>
      </div>
    </section>
  );
}
