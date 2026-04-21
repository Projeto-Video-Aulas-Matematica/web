import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import LessonList from '../components/LessonList';
import ExerciseList from '../components/ExerciseList';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { modules } from '../data/courseData';

export default function ModulePage() {
  const { moduleId } = useParams();

  const module = useMemo(
    () => modules.find((currentModule) => currentModule.id === moduleId) || modules[0],
    [moduleId]
  );

  return (
    <section className="section">
      <div className="container module-page-grid">
        <div className="module-main-content">
          <SectionTitle eyebrow="Módulo" title={module.title} description={module.shortDescription} centered />

          <div className="video-placeholder medium">
            <span className="play-button">▶</span>
          </div>

          <div className="module-content-block">
            <h3>Detalhes do módulo</h3>
            <p>
              Este módulo reúne aulas introdutórias e material de apoio para facilitar a continuidade do estudo.
            </p>
          </div>
        </div>

        <aside className="module-sidebar">
          <div className="sidebar-card">
            <h3>Aulas</h3>
            <LessonList lessons={module.lessons} />
          </div>

          <div className="sidebar-card">
            <h3>Exercícios</h3>
            <ExerciseList exercises={module.exercises} />
          </div>

          <div className="sidebar-card center-block">
            <p className="mini-label">Próximo módulo</p>
            <strong>{module.nextModuleName}</strong>
            <Button to={`/aula/${module.lessons[0].id}`}>Continuar</Button>
          </div>

          <Link className="text-link" to="/curso">
            Voltar para o curso
          </Link>
        </aside>
      </div>
    </section>
  );
}
