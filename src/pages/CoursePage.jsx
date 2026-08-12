import ModuleCard from '../components/ModuleCard';
import SectionTitle from '../components/ui/SectionTitle';
import { course, modules } from '../data/courseData';

export default function CoursePage() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Curso"
          title={course.title}
          description={course.description}
          centered
        />

        <SectionTitle eyebrow="Módulos" title="Do básico ao avançado" />

        <div className="module-grid">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}

          <div className="module-coming-soon">
            <div className="coming-soon-icon">+</div>

            <p className="mini-label">Em breve</p>

            <h3>Novos módulos estão chegando</h3>

            <p>
              Estamos preparando novos conteúdos para continuar sua jornada
              de aprendizado em matemática.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}