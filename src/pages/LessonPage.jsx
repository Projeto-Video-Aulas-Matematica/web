import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import LessonList from '../components/LessonList';
import Button from '../components/ui/Button';
import PdfModal from '../components/PdfModal';
import { modules } from '../data/courseData';
import roteiro from '../public/pdfs/roteiro-aula-2.pdf'

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
              src={`${lesson.videoUrl}?vq=hd1080`}
              title={lesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="lesson-text-block">
            <h2>Material</h2>
            <p>{lesson.content}</p>
            {lesson.pdfUrl && (
              <a
                href={lesson.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="lesson-pdf-link"
              >
                Ver Material da Aula (PDF)
              </a>
            )}
          </div>
        </div>

        <aside className="lesson-side-card">
          <h3>{module.title}</h3>
          <p>{module.description}</p>
          <Button to={`/modulo/${module.id}`}>Voltar Para o Módulo</Button>
        </aside>
      </div>
    </section>
  );
}
